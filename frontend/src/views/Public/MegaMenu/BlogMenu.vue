<template>
    <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#!">Blog</a>
                            <div class="dropdown-menu">
                                <ul class="dropdown-list">
                                    <li>
                                        <a href="blog-page(left-sidebar).html">Blog Left Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-page(right-sidebar).html">Blog Right Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-page(no-sidebar).html">Blog No Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="blog-page(list).html">Blog list</a>
                                    </li>
                                    <li>
                                        <a href="blog-page(masonary).html">Blog Masonry</a>
                                    </li>
                                    <li>
                                        <a href="blog-page(details).html">Blog Details</a>
                                    </li>
                                </ul>
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