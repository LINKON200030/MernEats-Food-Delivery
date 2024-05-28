import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "@/pages/Auth-CallbackPage.jsx";
import Auth0ProviderWithNavigate from "@/components/user/Auth0ProviderWithNavigate.jsx";
import ProfilePage from "@/pages/ProfilePage.jsx";
import UserProtector from "@/components/user/userProtector.jsx";
import RestaurantProfilePage from "@/pages/RestaurantProfilePage.jsx";
import RestaurantSearchByCityTown from "@/pages/Restaurant-SearchBy-City&town.jsx";
import RestaurantDetailsPage from "@/pages/RestaurantDetailsPage.jsx";
import GreetingsPage from "@/pages/GreetingsPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Auth0ProviderWithNavigate>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
                    <Route element={<UserProtector/>}>
                        <Route path="/user-profile" element={<ProfilePage/>}/>
                    </Route>
                <Route element={<UserProtector/>}>
                    <Route path="/user-restaurant-profile" element={<RestaurantProfilePage/>}/>
                </Route>
                <Route path="/search-by-city/:city" element={<RestaurantSearchByCityTown/>}/>
                <Route path="/detail/:id" element={<RestaurantDetailsPage/>}/>
                <Route path="/order-confirmation" element={<GreetingsPage/>}/>
            </Routes>

            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    );
};

export default App;