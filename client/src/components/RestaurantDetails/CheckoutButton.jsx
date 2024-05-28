import React from 'react';
import {Button} from "@/components/ui/button.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Profile from "@/components/user/Profile.jsx";
import DeliveryAddressConfirmation from "@/components/RestaurantDetails/DeliveryAddressConfirmation.jsx";


const CheckoutButton = ({deliveryAddress}) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    if (!isAuthenticated) {
        return (

            <Button  onClick={async ()=>await loginWithRedirect()} className="w-full" >
                Login for checkout
            </Button>
        )
    }else {
        return (
            <>
                <Dialog className="w-full bg-orange-500" >
                    <DialogTrigger>
                        <Button className="w-full bg-orange-500">Checkout All Items</Button>
                    </DialogTrigger>
                    <DialogContent className="w-full">
                       <DialogHeader>
                           <DialogTitle className="w-full text-2xl">Confirm Your Delivery Address</DialogTitle>

                           <DialogDescription className="w-full text-red-500 text-sm">
                               *This information will be used for delivery
                           </DialogDescription>
                       </DialogHeader>
                        <DialogDescription>
                        <DeliveryAddressConfirmation deliveryAddress={deliveryAddress} />
                        </DialogDescription>

                    </DialogContent>
                </Dialog>

            </>
        );

    }

};

export default CheckoutButton;
