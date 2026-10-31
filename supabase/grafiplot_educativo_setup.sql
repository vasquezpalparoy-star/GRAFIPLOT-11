CREATE TABLE public.educ_profiles (
 id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 email text NOT NULL, username text, role text NOT NULL DEFAULT 'user' CHECK(role='user'),
 institucion text, dre text, ugel text, docente text, director text, nivel text,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.educ_sesiones (
 id text PRIMARY KEY, user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 titulo text, template text, session_data jsonb NOT NULL DEFAULT '{}',
 last_saved timestamptz NOT NULL DEFAULT now(), created_at timestamptz NOT NULL DEFAULT now(), deleted_at timestamptz
);
CREATE INDEX educ_sesiones_owner_saved ON public.educ_sesiones(user_id,last_saved DESC);
CREATE TABLE public.educ_alumnos (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 nombre_completo text NOT NULL CHECK(length(trim(nombre_completo))>0),nivel text NOT NULL,grado text NOT NULL,seccion text NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX educ_alumnos_owner ON public.educ_alumnos(user_id,nivel,grado,seccion);
CREATE TABLE public.educ_security_logs (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 action text NOT NULL,details text,ip_address text,created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.educ_ai_credit_wallets (
 user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,balance integer NOT NULL DEFAULT 0 CHECK(balance>=0),updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.educ_ai_usage (
 request_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 action text,provider text,model text,credits integer NOT NULL DEFAULT 0,status text,input_tokens integer,output_tokens integer,
 created_at timestamptz NOT NULL DEFAULT now(),completed_at timestamptz
);
-- Persistencia multiusuario para PlanningContainer v1.

CREATE TABLE IF NOT EXISTS public.educ_planning_containers (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    id TEXT NOT NULL,
    schema_version TEXT NOT NULL DEFAULT '1.0',
    revision INTEGER NOT NULL CHECK (revision >= 1),
    status TEXT NOT NULL CHECK (status IN ('draft', 'reviewed', 'archived')),
    title TEXT NOT NULL CHECK (char_length(trim(title)) > 0),
    planning_type TEXT NOT NULL CHECK (planning_type IN ('learning_experience', 'unit', 'project', 'context')),
    education_level TEXT NOT NULL CHECK (education_level IN ('initial', 'primary', 'secondary')),
    container_data JSONB NOT NULL,
    last_saved TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    deleted_at TIMESTAMPTZ,
    PRIMARY KEY (user_id, id),
    CONSTRAINT planning_container_id_format CHECK (id ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
    CONSTRAINT planning_container_schema_v1 CHECK (
        jsonb_typeof(container_data) = 'object'
        AND schema_version = '1.0'
        AND container_data ->> 'schemaVersion' = schema_version
    ),
    CONSTRAINT planning_container_identity_consistent CHECK (
        container_data ->> 'id' = id
        AND (container_data ->> 'revision')::INTEGER = revision
        AND container_data ->> 'status' = status
        AND container_data #>> '{identity,title}' = title
        AND container_data #>> '{identity,planningType}' = planning_type
        AND container_data #>> '{identity,level}' = education_level
    ),
    CONSTRAINT planning_container_size_limit CHECK (pg_column_size(container_data) <= 2097152)
);

CREATE INDEX IF NOT EXISTS educ_idx_planning_containers_user_active_saved
    ON public.educ_planning_containers (user_id, last_saved DESC)
    WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS educ_idx_planning_containers_user_level_type
    ON public.educ_planning_containers (user_id, education_level, planning_type)
    WHERE deleted_at IS NULL;

ALTER TABLE public.educ_planning_containers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own planning containers" ON public.educ_planning_containers;
CREATE POLICY "Users can view their own planning containers"
    ON public.educ_planning_containers
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own planning containers" ON public.educ_planning_containers;
CREATE POLICY "Users can insert their own planning containers"
    ON public.educ_planning_containers
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own planning containers" ON public.educ_planning_containers;
CREATE POLICY "Users can update their own planning containers"
    ON public.educ_planning_containers
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own planning containers" ON public.educ_planning_containers;
CREATE POLICY "Users can delete their own planning containers"
    ON public.educ_planning_containers
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);

REVOKE ALL ON public.educ_planning_containers FROM PUBLIC, anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.educ_planning_containers TO authenticated;
GRANT ALL ON public.educ_planning_containers TO service_role;

-- Admite PlanningContainer 2.0 manteniendo lectura/escritura del contrato 1.0.

ALTER TABLE public.educ_planning_containers
    DROP CONSTRAINT IF EXISTS planning_container_schema_v1;

ALTER TABLE public.educ_planning_containers
    ADD CONSTRAINT planning_container_supported_schema CHECK (
        jsonb_typeof(container_data) = 'object'
        AND schema_version IN ('1.0', '2.0')
        AND container_data ->> 'schemaVersion' = schema_version
    );

COMMENT ON COLUMN public.educ_planning_containers.schema_version IS
    'Versión del contrato PlanningContainer. Se conservan 1.0 y 2.0 para compatibilidad.';

ALTER TABLE public.educ_profiles ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.educ_profiles FROM PUBLIC, anon, authenticated;
CREATE POLICY educ_own_read ON public.educ_profiles FOR SELECT TO authenticated USING ((select auth.uid())=id);
GRANT SELECT ON public.educ_profiles TO authenticated;
CREATE POLICY educ_own_insert ON public.educ_profiles FOR INSERT TO authenticated WITH CHECK ((select auth.uid())=id AND role='user' AND email=(auth.jwt()->>'email'));
GRANT INSERT ON public.educ_profiles TO authenticated;
CREATE POLICY educ_own_update ON public.educ_profiles FOR UPDATE TO authenticated USING ((select auth.uid())=id) WITH CHECK ((select auth.uid())=id);
GRANT UPDATE(username,institucion,dre,ugel,docente,director,nivel) ON public.educ_profiles TO authenticated;
ALTER TABLE public.educ_sesiones ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.educ_sesiones FROM PUBLIC, anon, authenticated;
CREATE POLICY educ_own_read ON public.educ_sesiones FOR SELECT TO authenticated USING ((select auth.uid())=user_id);
GRANT SELECT ON public.educ_sesiones TO authenticated;
CREATE POLICY educ_own_insert ON public.educ_sesiones FOR INSERT TO authenticated WITH CHECK ((select auth.uid())=user_id);
GRANT INSERT ON public.educ_sesiones TO authenticated;
CREATE POLICY educ_own_update ON public.educ_sesiones FOR UPDATE TO authenticated USING ((select auth.uid())=user_id) WITH CHECK ((select auth.uid())=user_id);
GRANT UPDATE,DELETE ON public.educ_sesiones TO authenticated;
CREATE POLICY educ_own_delete ON public.educ_sesiones FOR DELETE TO authenticated USING ((select auth.uid())=user_id);
ALTER TABLE public.educ_alumnos ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.educ_alumnos FROM PUBLIC, anon, authenticated;
CREATE POLICY educ_own_read ON public.educ_alumnos FOR SELECT TO authenticated USING ((select auth.uid())=user_id);
GRANT SELECT ON public.educ_alumnos TO authenticated;
CREATE POLICY educ_own_insert ON public.educ_alumnos FOR INSERT TO authenticated WITH CHECK ((select auth.uid())=user_id);
GRANT INSERT ON public.educ_alumnos TO authenticated;
CREATE POLICY educ_own_update ON public.educ_alumnos FOR UPDATE TO authenticated USING ((select auth.uid())=user_id) WITH CHECK ((select auth.uid())=user_id);
GRANT UPDATE,DELETE ON public.educ_alumnos TO authenticated;
CREATE POLICY educ_own_delete ON public.educ_alumnos FOR DELETE TO authenticated USING ((select auth.uid())=user_id);
ALTER TABLE public.educ_security_logs ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.educ_security_logs FROM PUBLIC, anon, authenticated;
CREATE POLICY educ_own_read ON public.educ_security_logs FOR SELECT TO authenticated USING ((select auth.uid())=user_id);
GRANT SELECT ON public.educ_security_logs TO authenticated;
CREATE POLICY educ_own_insert ON public.educ_security_logs FOR INSERT TO authenticated WITH CHECK ((select auth.uid())=user_id);
GRANT INSERT ON public.educ_security_logs TO authenticated;
ALTER TABLE public.educ_ai_credit_wallets ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.educ_ai_credit_wallets FROM PUBLIC, anon, authenticated;
CREATE POLICY educ_own_read ON public.educ_ai_credit_wallets FOR SELECT TO authenticated USING ((select auth.uid())=user_id);
GRANT SELECT ON public.educ_ai_credit_wallets TO authenticated;
ALTER TABLE public.educ_ai_usage ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.educ_ai_usage FROM PUBLIC, anon, authenticated;
CREATE POLICY educ_own_read ON public.educ_ai_usage FOR SELECT TO authenticated USING ((select auth.uid())=user_id);
GRANT SELECT ON public.educ_ai_usage TO authenticated;
CREATE OR REPLACE FUNCTION public.educ_replace_alumnos_roster(
    p_nivel TEXT,
    p_grado TEXT,
    p_seccion TEXT,
    p_nombres TEXT[]
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
DECLARE
    v_user_id UUID := auth.uid();
BEGIN
    IF v_user_id IS NULL THEN
        RAISE EXCEPTION 'Debes iniciar sesión para guardar alumnos.';
    END IF;
    IF coalesce(array_length(p_nombres, 1), 0) > 200 THEN
        RAISE EXCEPTION 'La lista no puede superar 200 alumnos.';
    END IF;

    DELETE FROM public.educ_alumnos
    WHERE user_id = v_user_id
      AND nivel = trim(p_nivel)
      AND grado = trim(p_grado)
      AND seccion = upper(trim(p_seccion));

    INSERT INTO public.educ_alumnos (user_id, nombre_completo, nivel, grado, seccion)
    SELECT v_user_id, trim(nombre), trim(p_nivel), trim(p_grado), upper(trim(p_seccion))
    FROM unnest(coalesce(p_nombres, ARRAY[]::TEXT[])) AS nombre
    WHERE char_length(trim(nombre)) > 0;
END;
$$;

REVOKE ALL ON FUNCTION public.educ_replace_alumnos_roster(TEXT, TEXT, TEXT, TEXT[]) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.educ_replace_alumnos_roster(TEXT, TEXT, TEXT, TEXT[]) TO authenticated;


CREATE FUNCTION public.educ_get_user_entitlements() RETURNS jsonb LANGUAGE sql STABLE SECURITY INVOKER SET search_path=pg_catalog AS $$ SELECT CASE WHEN auth.uid() IS NOT NULL THEN '{"ok": true, "plan": "free", "features": {"session.generate": false, "session.save": true, "session.export_docx": true, "session.export_pdf": true, "ai.chat": false, "ai.attach_file": false, "planning.unit": true, "planning.experience": true, "custom.templates": true}}'::jsonb ELSE '{"ok":false,"plan":"anonymous","features":{}}'::jsonb END $$;
REVOKE ALL ON FUNCTION public.educ_get_user_entitlements() FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.educ_get_user_entitlements() TO authenticated;
INSERT INTO storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
 VALUES('educ_logos','educ_logos',false,5242880,ARRAY['image/png','image/jpeg','image/webp']);
CREATE POLICY educ_logos_read ON storage.objects FOR SELECT TO authenticated USING(bucket_id='educ_logos' AND (storage.foldername(name))[1]=(select auth.uid())::text);
CREATE POLICY educ_logos_insert ON storage.objects FOR INSERT TO authenticated WITH CHECK(bucket_id='educ_logos' AND (storage.foldername(name))[1]=(select auth.uid())::text);
CREATE POLICY educ_logos_update ON storage.objects FOR UPDATE TO authenticated USING(bucket_id='educ_logos' AND (storage.foldername(name))[1]=(select auth.uid())::text) WITH CHECK(bucket_id='educ_logos' AND (storage.foldername(name))[1]=(select auth.uid())::text);
CREATE POLICY educ_logos_delete ON storage.objects FOR DELETE TO authenticated USING(bucket_id='educ_logos' AND (storage.foldername(name))[1]=(select auth.uid())::text);
