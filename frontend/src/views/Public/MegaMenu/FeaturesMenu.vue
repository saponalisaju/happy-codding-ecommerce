<template>
     <li class="nav-item dropdown mega-menu-wrapper">
                            <a class="nav-link" href="#!">Features</a>
                            <div class="mega-menu">
                                <div class="home-demo-menu">
                                    <div class="row g-sm-4 g-3 row-cols-5">
                                        <div class="col">
                                            <div class="menu-col">
                                                <h5 class="menu-header">Invoice Template</h5>
                                                <ul class="mega-links">
                                                    <li>
                                                        <a href="#!">Invoice 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Invoice 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Invoice 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Invoice 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Invoice 5</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="menu-col">
                                                <h5 class="menu-header">Email Template</h5>
                                                <ul class="mega-links">
                                                    <li>
                                                        <a href="#!">Welcome</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Announcement</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Abandonment</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Offer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Offer 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Review</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Featured Product</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="menu-col">
                                                <h5 class="menu-header">Email Template</h5>
                                                <ul class="mega-links">
                                                    <li>
                                                        <a href="#!">Black Friday</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Christmas</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Cyber-Monday</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Flash Sale</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Order Success</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Order Success 2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="menu-col">
                                                <h5 class="menu-header">Cookie Bar</h5>
                                                <ul class="mega-links">
                                                    <li>
                                                        <a href="index.html">Cookie Bottom 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">Cookie Bottom 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">Cookie Bottom 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">Cookie Bottom 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-5.html">Cookie Bottom 5</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-6.html">Cookie Bottom 6</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-7.html">Cookie Bottom 7</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="menu-col">
                                                <h5 class="menu-header">Model</h5>
                                                <ul class="mega-links">
                                                    <li>
                                                        <a href="#!">Newsletter</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Exit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Christmas</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Black Friday</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Cyber Monday</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">New Year</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
</template>

<style scoped>
.nav-item.dropdown {
  position: relative;
  list-style: none;
}

.nav-item.dropdown .nav-link::after {
  display: none !important;
  content: none !important;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;

  min-width: 200px;

  width: 100px;

  padding: 12px 0;

  background: #ffffff !important;

  opacity: 1 !important;

  backdrop-filter: unset !important;

  border: 1px solid #eee;

  border-radius: 12px;

  box-shadow: 0 20px 40px rgba(0,0,0,0.12);

  z-index: 999999 !important;

  overflow: hidden;

  isolation: isolate;
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #222;
  text-decoration: none;
  transition: 0.3s;
}

.dropdown-item:hover {
  background: #f5f5f5;
  padding-left: 25px;
}

.nav-link {
  cursor: pointer;
}

</style>