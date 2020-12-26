import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'
import {ResourceList, Card, Stack, TextStyle, Thumbnail, Loading } from "@shopify/polaris"
import store from 'store-js'
import {Query} from 'react-apollo'

const GET_PRODUCT_BY_ID = gql `
query  {
  shop {
    name
  }
  
}
`

const ProductList = () => {

     return(
        <div>
          <Query query = {GET_PRODUCT_BY_ID}  >
          {({data, loading, error}) => {
          if (loading) return <div>Loading…</div>;
          if (error) return <div>{error.message}</div>;
          console.log(data); }}
          </Query>
          

        </div>
        
    

)}

export default ProductList