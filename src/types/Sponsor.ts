
export interface SponsorItemProps {
  sponsor: {
    id: number,
    full_name: string
    phone: string
    sum: number
    spent: number
    get_status_display: string,
    created_at: string
  },
  index: number
}