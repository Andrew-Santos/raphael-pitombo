import { createClient } from "https://esm.sh/@supabase/supabase-js"

const SUPABASE_URL = "https://owpboqevrtthsupugcrt.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cGJvcWV2cnR0aHN1cHVnY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjY4MDQsImV4cCI6MjA2OTUwMjgwNH0.7RjkVOUT6ByewP0D6FgHQjZDCoi4GYnGT6BMj794MfQ"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
