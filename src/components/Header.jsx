import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
function Header({onSearch}) {
  const [openBasic, setOpenBasic] = useState(false);
  const [searchValue, setSearchValue] = useState("");
 const navigate = useNavigate();
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue); // Call prop function with search term
    window.history.pushState({}, "", `/${searchValue}`)
  };

  return (
    <MDBNavbar expand="lg" bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-light" href="#">
          LMS
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 text-light">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                className="text-light"
                href="#"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="text-light" href="#">
                Link
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link text-light"
                  role="button"
                >
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem className="text-light" link>
                    Action
                  </MDBDropdownItem>
                  <MDBDropdownItem className="text-light" link>
                    Another action
                  </MDBDropdownItem>
                  <MDBDropdownItem className="text-light" link>
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form onSubmit={handleSearch} className="d-flex input-group w-13">
            <input
              type="text"
              value={searchValue}
              onChange={handleChange}
              className="form-control"
              placeholder="Search for course"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
