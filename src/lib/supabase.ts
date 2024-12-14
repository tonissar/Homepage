import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjxsabpyzvslpdehxnyx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqeHNhYnB5enZzbHBkZWh4bnl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwOTQ5NTYsImV4cCI6MjA0OTY3MDk1Nn0.h96vSJJ2NOc4gfBvxt1CJfriyvlwzsfHtSRWGwX0r5o';

export const supabase = createClient(supabaseUrl, supabaseKey);