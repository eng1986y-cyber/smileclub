const supabaseUrl = "https://fmipichgotqjsxrddcie.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtaXBpY2hnb3RxanN4cmRkY2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxOTUyMjYsImV4cCI6MjA4Nzc3MTIyNn0.sgn-16IIC4_oD-uoe5-CVKHlSTHS98S9jcZoAaeBvWc";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);