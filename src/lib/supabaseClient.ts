import { createClient } from '@supabase/supabase-js';

// Remplacement direct des variables pour contourner le problème de chargement .env
const supabaseUrl ="https://svahmysafwggfeuqjdju.supabase.co";
const supabaseAnonKey ="sb_publishable_mSpL_YwLdtQYaereW2L_YQ_qyCItthT"; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);