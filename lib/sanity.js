const sanityClient = require('@sanity/client')

export const client = sanityClient({
    projectId: 'vl5ugs3r',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skTsprKoBFqbU7ImBBoyeVPbPjcvFcWxQlWCBoyuVJKkcZonl5XEvJhgGWwFXCEonJyu8X7id8eBhYLdp29GoRZeUWzVHk0oZZ0Fm6iSf7Tk5dTTAu0n196oOcSaSqFPXWndLSJUog75S3PaYsCdqdR9Q4ud428AryBbwv8x6bI8hH0fK5Ie',
    useCdn: false,
})