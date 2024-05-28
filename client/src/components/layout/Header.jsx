import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetDescription,

    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu3Fill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {useAuth0} from "@auth0/auth0-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiAccountCircleLine } from "react-icons/ri";




const Header = () => {

    const {loginWithRedirect, isAuthenticated,user,logout} = useAuth0();



    return (
        <>
            <div className="navbar  border-b-2 border-b-orange-500 py-6  flex items-center justify-between">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-4xl font-bold text-orange-500 tracking-tight">MernEats.com</Link>
                </div>

                {/*// NavBar For Mobile Application*/}
                <div className="md:hidden text-3xl text-orange-500 cursor-pointer mr-6">

                <Sheet>
                    <SheetTrigger><RiMenu3Fill /></SheetTrigger>
                    {
                        isAuthenticated?(
                            <SheetContent>

                                <SheetTitle className=" flex justify-between mx-auto text-orange-500 items-center text-2xl font-bold my-4">
                                    <RiAccountCircleLine className="text-md" />
                                    <span className="text-[16px] font-bold">
                                        {user.email}
                                    </span>
                                </SheetTitle>
                                <Separator className="my-4" />
                                <SheetDescription className="flex flex-col gap-4 text-bold ">
                                    <Link to="/user-profile">
                                    <span className="w-full hover:bg-base-100">Profile Manage</span>
                                    </Link>

                                    <Link to="/user-restaurant-profile">
                                        <span className="w-full hover:bg-base-100">Restaurant Manage</span>
                                    </Link>


                                    <Button className="bg-orange-500 w-full mt-3 justify-center mx-auto text-white  font-bold py-2 px-4 rounded"
                                    onClick={()=>logout()}

                                    >
                                        LogOUt
                                    </Button>

                                </SheetDescription>

                            </SheetContent>
                            ):(
                            <SheetContent>

                                <SheetTitle className="text-2xl font-bold my-4">
                                    Welcome to MernEats.com
                                </SheetTitle>
                                <Separator className="my-4" />
                                <SheetDescription>
                                    <Button className="bg-orange-500 w-full justify-center mx-auto text-white  font-bold py-2 px-4 rounded"
                                            onClick={async ()=>await loginWithRedirect()}
                                    >LogIn</Button>

                                </SheetDescription>

                            </SheetContent>
                            )
                    }

                </Sheet>
                </div>


                {/*// NavBar For Desktop Application*/}
                <div className="hidden md:block text-3xl mr-9 cursor-pointer">

                    {
                        isAuthenticated?(
                            <DropdownMenu >

                                <DropdownMenuTrigger className="flex items-center justify-center gap-3  text-orange-500 focus:outline-none">
                                    <RiAccountCircleLine className="text-md" />
                                    <span className="text-[18px] font-bold text-black hover:text-orange-500">
                                        {user.email}
                                    </span>



                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="px-4 py-3 my-1">

                                    <Link to="/user-profile">
                                        <DropdownMenuItem>Profile Manage</DropdownMenuItem>
                                    </Link>

                                    <Link to="/user-restaurant-profile">
                                    <DropdownMenuItem>Restaurant Manage</DropdownMenuItem>
                                    </Link>

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Button
                                            variant="ghost"
                                            className="w-full bg-orange-500 text-white hover:bg-orange-400"

                                        onClick={()=>logout()}
                                        >
                                            Logout
                                        </Button>
                                    </DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>


                        ):(
                            <Button variant="ghost" size="lg"
                                    onClick={async ()=>await loginWithRedirect()}
                                    className="font-bold font-size-[16px] hover:text-orange-500 duration-100 hover:bg-white" >
                                LogIn
                            </Button>
                            )
                    }








                </div>







            </div>










        </>
    );
};

export default Header;
