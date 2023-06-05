// import { Layout } from './layouts'
// import { LoginPage } from './pages/loginPage'
import {RouterProvider} from 'react-router-dom'
import {router} from './routes/routes'

function App() {

  return (
    <>
    {/* <Layout>
        
    </Layout> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
