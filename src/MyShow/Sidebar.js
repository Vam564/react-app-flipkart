import React from 'react'

const  Sidebar = () => {
    return (
        <>
            <div>
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>My Show</h3>
                    </div>

                    <ul class="list-unstyled components">
                        <p>Profile</p>
                        <li class="">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Movies</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Telugu</a>
                                </li>
                                <li>
                                    <a href="#">Hindi</a>
                                </li>
                                <li>
                                    <a href="#">English</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">My Show Orginals</a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Web Series</a>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">Music World</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Premium Plans</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
