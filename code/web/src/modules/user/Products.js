// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'

// App Imports
import { getList as getProductList, remove as removeProduct } from '../product/api/actions'
import { messageShow, messageHide } from '../common/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
// import AdminMenu from '../common/Menu'
import { routeImage } from '../../setup/routes'

// Component
class Products extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getProductList())
  }

  // Runs on client only
  componentDidMount() {
    this.props.getProductList()
  }

  remove = (id) => {
    if (id > 0) {
      let check = confirm('Are you sure you want to delete this product?')

      if (check) {
        this.props.messageShow('Deleting, please wait...')

        this.props.removeProduct({ id })
          .then(response => {
            if (response.status === 200) {
              if (response.data.errors && response.data.errors.length > 0) {
                this.props.messageShow(response.data.errors[0].message)
              } else {
                this.props.messageShow('Product deleted successfully.')

                this.props.getProductList(false)
              }
            } else {
              this.props.messageShow('Please try again.')
            }
          })
          .catch(error => {
            this.props.messageShow('There was some error. Please try again.')

          })
          .then(() => {
            this.setState({
              isLoading: false
            })

            window.setTimeout(() => {
              this.props.messageHide()
            }, 5000)
          })
      }
    }
  }

  render() {
    const { isLoading, list } = this.props.products

    return (
      <div>
          {/* Page Content */}
        <div>
          {/* Product list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                  </tr>
                </thead>

                <tbody>
                {
                  isLoading
                    ? <tr>
                        <td colSpan="6">
                          <Loading message="loading products..."/>
                        </td>
                      </tr>
                    : list.length > 0
                      ? list.map(({ id, image, name, description, createdAt, updatedAt }) => (
                          <tr key={id}>
                            <td>
                              <img src={routeImage + image} alt={name} style={{ width: 100 }}/>
                            </td>

                            <td>
                              { name }
                            </td>

                            <td>
                              { description }
                            </td>

                            <td>
                              { new Date(parseInt(createdAt)).toDateString() }
                            </td>

                            <td>
                              { new Date(parseInt(updatedAt)).toDateString() }
                            </td>
                          </tr>
                        ))
                      : <tr>
                          <td colSpan="6">
                            <EmptyMessage message="No products to show."/>
                          </td>
                        </tr>
                }
                </tbody>
              </table>
            </GridCell>
          </Grid>
        </div>
      </div>
    )
  }
}

// Component Properties
Products.propTypes = {
  products: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    products: state.products
  }
}

export default connect(listState, { getProductList, removeProduct, messageShow, messageHide })(Products)
