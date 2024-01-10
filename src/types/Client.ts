export interface ClientBanner {
  clientCategory: string,
  client:  {
    full_name: string,
    get_status_display?: string
  } | null
}