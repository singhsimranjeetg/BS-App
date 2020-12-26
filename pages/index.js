import React ,{useState, useCallback} from 'react'
import {EmptyState, Layout, Page} from '@shopify/polaris'
import {ResourcePicker} from '@shopify/app-bridge-react'
import store from 'store-js'

import ProductList from '../pages/components/productList'




function Index() {

    const [modal, setModal] = useState({open: false})
    const emptyState = !store.get('ids')

//saves product ids to browser after selecting from Resource picker.
    const handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id)
        setModal({open: false})
        store.set('ids', idsFromResources)
        console.log(resources)
        console.log(idsFromResources)
        console.log('pids', store.get('ids'))

    }

    const handleCancel = useCallback(() => setModal({open: false}))

    const handleAction = useCallback(() => setModal({open: true}))

    

    return (
        <Page>
            <ResourcePicker
            resourceType="Product"
            showVariants={false}
            open={modal.open}
            onCancel={handleCancel}
            onSelection={(resources) => handleSelection(resources)}
            />
            <Layout>
                { emptyState ?
            <EmptyState
              heading="Manage your Best Selling Products"
              action={{
                    content: 'Select Products',
                    onAction: handleAction 
                    }}
              image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
            >
              <p>Add products and show them on your store.</p>
            </EmptyState>
            : <ProductList />
                }
            </Layout>
        </Page>
    )
}

export default Index