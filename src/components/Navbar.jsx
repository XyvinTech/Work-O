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
import PhoneIcon from "@mui/icons-material/Phone";
import PlusIcon from "../assets/icons/call.svg";
import { mont } from "@/theme";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import StyledIconButton from "@/ui/StyledIconButton";

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
    { label: "About Us", href: "/about" },
    { label: "Skill Development", href: "/skill" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const isTransparent = pathname === "/" || pathname === "/blogs";

  useEffect(() => {
    const activeMenuItem = menuItems.find((item) => item.href === pathname);
    setActiveTab(activeMenuItem?.label || "");
  }, [pathname]);

  return (
    <AppBar
      position="absolute"
      style={{
        backgroundColor:
          mobileMenuOpen && isTransparent
            ? "#fff"
            : mobileMenuOpen
            ? "#000000"
            : isTransparent
            ? "transparent"
            : "#00000033",
        color:
          mobileMenuOpen && isTransparent
            ? "#000"
            : mobileMenuOpen
            ? "#fff"
            : isTransparent
            ? "#000"
            : "#fff",
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
              width={"168px"}
              height={"auto"}
            />
            {!isMobile && (
              <Stack direction={"row"} spacing={4}>
                <StyledIconButton icon={PlusIcon} buttonText="Customer care" />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/get-the-app")}
                >
                  Get the App
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
              <Box mt={2} width="100%">
                {menuItems.map(({ label, href }) => (
                  <Link href={href} key={label}>
                    <Button
                      color="inherit"
                      disableRipple
                      sx={{
                        fontFamily: mont.style.fontFamily,
                        textTransform: "uppercase",
                        color:
                          isMobile && isTransparent
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
                <Stack spacing={2} mt={2} alignItems={"center"}>
                  <StyledIconButton
                    icon={PlusIcon}
                    buttonText="Customer care"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => router.push("/get-the-app")}
                  >
                    Get the App
                  </Button>{" "}
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
                    sx={{
                      fontFamily: mont.style.fontFamily,
                      textTransform: "uppercase",
                      color:
                        isMobile && isTransparent
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
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
