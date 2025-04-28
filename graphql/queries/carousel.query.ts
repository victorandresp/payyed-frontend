export const GET_CAROUSEL_IMAGES = gql`
    query{
        getCarouselImages{
            title,
            subtitle
            orientation,
            firstButton,
            secondButton,
            path
        }
    }
`