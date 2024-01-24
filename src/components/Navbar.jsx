import { useState } from "react";
import './Navbar.css'

function Navbar() {
    return (
        <nav class="navbar p-3 navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand fs-5" href="#">The Travelling Penguin</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav fs-5">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        {/* <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;