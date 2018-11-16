export interface User {
    firstName: string
    lastName: string
    email: string
    isActive?: boolean,
    registered?: any,
    hide?: boolean
}
// putting a question mark next to the property will make it nullable.
