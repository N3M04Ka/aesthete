import {NavLink} from 'react-router-dom'

const links=[
    {
        text:"Personal Info",
        address:"personal-info"
    },
    {
        text:"Order History",
        address:"order-history"
    },
    {
        text:"Saved Items",
        address:"saved-items"
    },
    {
        text:"Account Settings",
        address:"account-settings"
    },
    {
        text:"Sign Out",
        address:"sign-out"
    },
];

export default function SideBar() {
   return (
       <div className="sideBar">
            <h2>Account</h2>
            <div className="links">
                {links.map((el,id)=>(
                    <NavLink to={"../"+ el.address} key={id}>{el.text}</NavLink>
                ))}
            </div>
        </div>
   );
}
