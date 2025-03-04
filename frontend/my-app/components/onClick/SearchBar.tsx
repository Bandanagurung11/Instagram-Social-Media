import React from 'react'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
export default function SearchBar({isOpen, toggleDrawer}:{isOpen:boolean, toggleDrawer:()=>void }) {
  return (
    <div>
        <>
            {/* <button onClick={toggleDrawer}>Show</button> */}
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                overlayOpacity={0}
                
            >
                <div>Hello World</div>
            </Drawer>
        </>
    </div>
  )
}
