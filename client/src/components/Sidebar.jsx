import React, { useEffect, useState } from "react";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  TodayOutlined,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";
import FlexBetween from "components/FlexBetween";  
import profileImage from "assets/Profile.jpeg";

const navItems = [
  { text: "Dashboard", icon: <HomeOutlined /> },
  { text: "Client Facing", icon: null },
  { text: "Products", icon: <ShoppingCartOutlined /> },
  { text: "Customers", icon: <Groups2Outlined /> },
  { text: "Transactions", icon: <ReceiptLongOutlined /> },
  { text: "Geography", icon: <PublicOutlined /> },
  { text: "Sales", icon: null },
  { text: "Overview", icon: <PointOfSaleOutlined /> },
  { text: "Daily", icon: <TodayOutlined /> },
  { text: "Monthly", icon: <CalendarMonthOutlined /> },
  { text: "Breakdown", icon: <PieChartOutlined /> },
  { text: "Management", icon: null },
  { text: "Admin", icon: <AdminPanelSettingsOutlined /> },
  { text: "Performance", icon: <TrendingUpOutlined /> },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  
  // Get userId from Redux state
  const userId = useSelector((state) => state.global.userId);
  
  // Fetch user data using RTK Query
  const { data: user, isLoading, error } = useGetUserQuery(userId);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              display: "flex",
              flexDirection: "column",
              height: "100vh", // Full viewport height
              overflow: "hidden", // Remove scrollbar
            },
          }}
        >
          {/* Header - Compact */}
          <Box sx={{ p: "1rem 1.5rem" }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              color={theme.palette.secondary.main}
            >
              <Typography variant="h5" fontWeight="bold"> {/* Smaller header */}
                INSIGHTBASE
              </Typography>
              {!isNonMobile && (
                <IconButton
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  sx={{ position: "absolute", right: "0" }}
                  size="small"
                >
                  <ChevronLeft />
                </IconButton>
              )}
            </Box>
          </Box>

          {/* Navigation items - Compact spacing */}
          <List sx={{ 
            flexGrow: 1, 
            py: 0,
            overflow: "hidden" // Prevent individual scrolling
          }}>
            {navItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography 
                    key={text} 
                    sx={{ 
                      m: "1rem 0 0.5rem 2rem", // Reduced margins
                      fontSize: "0.8rem", // Smaller section headers
                      fontWeight: "bold",
                      color: theme.palette.secondary[300]
                    }}
                  >
                    {text}
                  </Typography>
                );
              }

              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding sx={{ py: 0 }}>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      py: "0.4rem", // Reduced padding
                      backgroundColor:
                        active === lcText
                          ? theme.palette.secondary[300]
                          : "transparent",
                      color:
                        active === lcText
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[100],
                      minHeight: "36px" // Compact height
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "1.5rem", // Reduced margin
                        minWidth: "30px", // Compact icon space
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                      {React.cloneElement(icon, { fontSize: "small" })}
                    </ListItemIcon>
                    <ListItemText 
                      primary={text}
                      primaryTypographyProps={{
                        fontSize: "0.85rem" // Smaller text
                      }}
                    />
                    {active === lcText && (
                      <ChevronRightOutlined sx={{ ml: "auto" }} fontSize="small" />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          
          {/* User Profile Section - Compact */}
          <Box sx={{ p: "0.75rem" }}>
            <Divider sx={{ mb: "0.75rem" }} />
            <Box
              display="flex"
              alignItems="center"
              gap="0.5rem"
              sx={{

                borderRadius: "6px",
                p: "0.5rem",
              }}
            >
              {/* Profile Image - Smaller */}
              <img
                alt="profile"
                src={profileImage}
                style={{
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                  border: `1px solid ${theme.palette.secondary[200]}`
                }}
              />
              
              {/* User Info - Compact */}
              <Box 
                flexGrow={1}
                minWidth={0}
                overflow="hidden"
              >
                <Typography
                  fontWeight="bold"
                  fontSize="0.8rem"
                  sx={{ 
                    color: theme.palette.secondary[100],
                    lineHeight: 1.1
                  }}
                  noWrap
                >
                  {isLoading ? "Loading..." : error ? "Error" : user?.name || "Unknown User"}
                </Typography>
                <Typography
                  fontSize="0.7rem"
                  sx={{ 
                    color: theme.palette.secondary[100],
                    lineHeight: 1.1
                  }}
                  noWrap
                >
                  {isLoading ? "Loading..." : error ? "Error" : user?.occupation || "Unknown Role"}
                </Typography>
              </Box>
              
              {/* Settings Icon - Smaller */}
              <IconButton
                size="small"
                sx={{ 
                  color: theme.palette.secondary[200],
                  flexShrink: 0,
                  p: "2px", // Smaller padding
                  "&:hover": {
                    backgroundColor: theme.palette.primary[600]
                  }
                }}
              >
                <SettingsOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;