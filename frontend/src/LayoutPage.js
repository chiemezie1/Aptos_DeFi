import { Outlet } from "react-router-dom";
import WalletPage from "./pages/WalletPage.js";

const buttonStyles = "nes-btn is-primary m-auto sm:m-0 sm:px-4";


export default function LayoutPage() {
    return (
        <div className="">
            <WalletPage />
        </div>
    );
}

