import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const navBar = ()=> {
return(
<Menu> 
  <Link to='/'>
  <Menu.Item>
                    foods
                </Menu.Item>
            </Link>
            <Link to='/foods'>
                <Menu.Item>
                    cooks
              </Menu.Item>
            </Link>
            <Link to='/cooks'>
              <Menu.Item>
              </Menu.Item>
            </Link>              

     
     
</Menu>

)

}

export default navBar