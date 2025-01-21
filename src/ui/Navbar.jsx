"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Collapse,
  useTheme,
  useMediaQuery,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { mont } from "@/Theme/Theme";
import NavbarButton from "./NavbarButton";
import PlusIcon from "../assets/icons/call.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Platform", href: "/our-platform" },
    { label: "About Us", href: "/about" },
    { label: "Skill Development", href: "/skill" },

    { label: "Resources", href: "/resources" },
    // { label: "Blog", href: "/blog" },

    { label: "Contact Us", href: "/contact" },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const isTransparent = pathname === "/" || pathname.startsWith("/blog/");
  const isThankPage = pathname === "/thank";
  useEffect(() => {
    const activeMenuItem = menuItems.find((item) => item.href === pathname);
    setActiveTab(activeMenuItem?.label || "");
  }, [pathname]);
  const handleGetAppClick = (e) => {
    e.preventDefault();
    // Replace this URL with your actual Calendly scheduling page URL
    const calendlyUrl =
      "https://calendly.com/avneesh-chaudhary-workoindia/worko-crm-demo";
    window.open(calendlyUrl, "_blank");
  };
  return (
    <AppBar
      position="absolute"
      style={{
        backgroundColor: isThankPage
          ? "#fff" // Set background color to #fff for Thank You page
          : mobileMenuOpen && isTransparent
          ? "#fff"
          : mobileMenuOpen
          ? "#000000"
          : isTransparent
          ? "transparent"
          : "#00000033",
        color: isThankPage
          ? "#000" // Set text color to black for Thank You page
          : mobileMenuOpen && isTransparent
          ? "#000"
          : mobileMenuOpen
          ? "#fff"
          : isTransparent
          ? "#000"
          : "#fff",
        height: isMobile ? (mobileMenuOpen ? "auto" : "64px") : "",
      }}
    >
      <Toolbar>
        <Box display="flex" flexDirection="column" width="100%" p={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img
              src="/main_logo.png"
              alt="Logo"
              width={isMobile ? "130px" : "168px"}
              height={"auto"}
            />
            {!isMobile && (
              <Stack direction={"row"} spacing={2}>
                <Link
                  href={`tel:${7666666559}`}
                  passHref
                  target="_blank"
                  style={{ textDecorationLine: "none" }}
                >
                  <NavbarButton
                    icon={PlusIcon}
                    buttonText="+91 7-666-666-559"
                    width={"210px"}
                  />
                </Link>
                <Link
                  href={"/get-the-app"}
                  passHref
                  style={{ textDecorationLine: "none" }}
                >
                  <Button
                    variant="navbar"
                    color="secondary"
                    onClick={() => router.push("/get-the-app")}
                  >
                    Get the App
                  </Button>
                </Link>

                <Button
                  variant="navbar"
                  color="primary"
                  onClick={handleGetAppClick}
                >
                  Book a Demo
                </Button>
              </Stack>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuToggle}
              >
                <MenuIcon color="primary" />
              </IconButton>
            )}
          </Box>
          {!isMobile && <Divider sx={{ m: 2 }} />}
          {isMobile ? (
            <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
              <Box
                mt={2}
                width="100%"
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                {menuItems.map(({ label, href }) => (
                  <Link href={href} key={label}>
                    <Button
                      color="inherit"
                      disableRipple
                      fullWidth
                      sx={{
                        fontFamily: mont.style.fontFamily,
                        textTransform: "uppercase",
                        color: isThankPage
                          ? activeTab === label
                            ? theme.palette.primary.main // Active tab color for Thank You page
                            : "#1B1B1B" // Inactive tab color for Thank You page
                          : isMobile && isTransparent
                          ? activeTab === label
                            ? theme.palette.primary.main
                            : "#1B1B1B"
                          : activeTab === label
                          ? theme.palette.primary.main
                          : isTransparent
                          ? "#1B1B1B"
                          : "#fff",

                        fontSize: "14px",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {label}
                    </Button>
                  </Link>
                ))}
                <Stack spacing={2} mt={2} width={"230px"}>
                  <Link
                    href={`tel:${7666666559}`}
                    passHref
                    target="_blank"
                    style={{ textDecorationLine: "none", width: "100%" }}
                  >
                    <NavbarButton
                      icon={PlusIcon}
                      buttonText="+91 7-666-666-559"
                      width={"100%"}
                    />
                  </Link>
                  <Button
                    variant="navbar"
                    color="secondary"
                    fullWidth
                    onClick={() => router.push("/get-the-app")}
                  >
                    Get the App
                  </Button>{" "}
                  <Button
                    variant="navbar"
                    color="primary"
                    onClick={handleGetAppClick}
                  >
                    Book a Demo
                  </Button>
                </Stack>
              </Box>
            </Collapse>
          ) : (
            <Stack
              alignItems="center"
              direction={"row"}
              justifyContent={"center"}
              spacing={4}
            >
              {menuItems.map(({ label, href }) => (
                <Link href={href} key={label}>
                  <Button
                    color="inherit"
                    disableRipple
                    fullWidth
                    sx={{
                      fontFamily: mont.style.fontFamily,
                      textTransform: "uppercase",
                      color: isThankPage
                        ? activeTab === label
                          ? theme.palette.primary.main // Active tab color for Thank You page
                          : "#1B1B1B" // Inactive tab color for Thank You page
                        : isMobile && isTransparent
                        ? activeTab === label
                          ? theme.palette.primary.main
                          : "#1B1B1B"
                        : activeTab === label
                        ? theme.palette.primary.main
                        : isTransparent
                        ? "#1B1B1B"
                        : "#fff",
                      borderRadius: "0px",
                      borderBottom:
                        activeTab === label
                          ? `2px solid ${theme.palette.primary.main}`
                          : "none",
                      fontSize: "14px",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: ` ${theme.palette.primary.main}`,
                      },
                    }}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
