import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import 'animate.css'; // Import Animate.css for animations

const Projects = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Display for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const projects = {
    "For WS":[
     {
      "WS No.": 1,
      "Project Number": 5,
      "Brief Details": "Akabarpur Underpass",
      "Authority \/ Client": "ITD\/NHAI",
      "Quantity": 12700,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed",
      "Column9": "Ribbed Steel Strip with Large Panel Fascia"
     },
     {
      "WS No.": 2,
      "Project Number": 6,
      "Brief Details": "Panki Underpass",
      "Authority \/ Client": "Somdatt Buiders\/NHAI",
      "Quantity": 7000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed",
      "Column9": "PET Geogrid with Large Panel Fascia"
     },
     {
      "WS No.": 3,
      "Project Number": 7,
      "Brief Details": "Underpass Kanpur NH2",
      "Authority \/ Client": "Somdatt Buiders\/NHAI",
      "Quantity": 7500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed",
      "Column9": "PET Geostrap with Large Panel Fascia"
     },
     {
      "WS No.": 4,
      "Project Number": 8,
      "Brief Details": "LML Crossing Underpass",
      "Authority \/ Client": "Somdatt Buiders\/NHAI",
      "Quantity": 7500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed",
      "Column9": "PET Geogrid with RS Block Fascia"
     },
     {
      "WS No.": 5,
      "Project Number": 9,
      "Brief Details": "ROB6\/1 Kanpur",
      "Authority \/ Client": "Somdatt Buiders\/NHAI",
      "Quantity": 16000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed",
      "Column9": "PET Geogrid with Gabion Fascia"
     },
     {
      "WS No.": 6,
      "Project Number": 10,
      "Brief Details": "Flyover Mohania",
      "Authority \/ Client": "LGECC\/NHAI",
      "Quantity": 10500,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed",
      "Column9": "SDA & Driven Soil Nailing"
     },
     {
      "WS No.": 7,
      "Project Number": 11,
      "Brief Details": "Clover Leaf Noida",
      "Authority \/ Client": "DDA\/UPSBCL",
      "Quantity": 550,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed",
      "Column9": "Friction Slab cum Crash Barrier"
     },
     {
      "WS No.": 8,
      "Project Number": 12,
      "Brief Details": "Clover Leaf Sarita Vihar",
      "Authority \/ Client": "DDA\/UPSBCL",
      "Quantity": 450,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed",
      "Column9": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell"
     },
     {
      "WS No.": 9,
      "Project Number": 13,
      "Brief Details": "ROB Lucknow",
      "Authority \/ Client": "UPPWD\/UPSBCL",
      "Quantity": 1400,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed",
      "Column9": "Slope Protection (Chute Drain)"
     },
     {
      "WS No.": 10,
      "Project Number": 14,
      "Brief Details": "Moti Nagar Flyover",
      "Authority \/ Client": "UnitECH\/DPWD",
      "Quantity": 1700,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 11,
      "Project Number": 15,
      "Brief Details": "Punjabi Bagh Flyover",
      "Authority \/ Client": "UnitECH\/DPWD",
      "Quantity": 1700,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 12,
      "Project Number": 16,
      "Brief Details": "ROB Hissar",
      "Authority \/ Client": "DSPUNNU\/HPWD",
      "Quantity": 2500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 13,
      "Project Number": 17,
      "Brief Details": "ROB Jindal Crossing",
      "Authority \/ Client": "DSPUNNU\/HPWD",
      "Quantity": 7000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 14,
      "Project Number": 18,
      "Brief Details": "Gannaur ROB",
      "Authority \/ Client": "Zoom Dev.\/Haryana",
      "Quantity": 3500,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 15,
      "Project Number": 19,
      "Brief Details": "ROB Palwal",
      "Authority \/ Client": "SPS\/HPWD",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 16,
      "Project Number": 20,
      "Brief Details": "ROB Etawah",
      "Authority \/ Client": "UPSBC",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 17,
      "Project Number": 21,
      "Brief Details": "EW Corrdor RJ-10",
      "Authority \/ Client": "KMCCL\/NHAI",
      "Quantity": 44500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 18,
      "Project Number": 22,
      "Brief Details": "EW Pkg-12",
      "Authority \/ Client": "LANCO+RANI\/NHAI",
      "Quantity": 12000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar & West Bengal",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 19,
      "Project Number": 23,
      "Brief Details": "Dalaychowk ROB",
      "Authority \/ Client": "SPS\/NHAI",
      "Quantity": 2200,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 20,
      "Project Number": 24,
      "Brief Details": "EW UP1 & UP3",
      "Authority \/ Client": "OSE\/NHAI",
      "Quantity": 85000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 21,
      "Project Number": 25,
      "Brief Details": "BML Canal Patiala",
      "Authority \/ Client": "SPS\/PPWD",
      "Quantity": 1000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 22,
      "Project Number": 26,
      "Brief Details": "BMIC Interchanges",
      "Authority \/ Client": "UNITECH\/NICEL",
      "Quantity": 5000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Karnataka",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 23,
      "Project Number": 27,
      "Brief Details": "NH-1A ROB",
      "Authority \/ Client": "GDCL\/NHAI",
      "Quantity": 20500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 24,
      "Project Number": 28,
      "Brief Details": "NH-1A ROB",
      "Authority \/ Client": "GDCL\/NHAI",
      "Quantity": 4000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 25,
      "Project Number": 29,
      "Brief Details": "Dalkhola Bypass",
      "Authority \/ Client": "SPML\/NHAI",
      "Quantity": 8000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "West Bengal",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 26,
      "Project Number": 30,
      "Brief Details": "BMIC",
      "Authority \/ Client": "ABPL\/NICEL",
      "Quantity": 5000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Karnataka",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 27,
      "Project Number": 31,
      "Brief Details": "EW Orai- Bhognipur",
      "Authority \/ Client": "KMCCL\/NHAI",
      "Quantity": 31000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 28,
      "Project Number": 32,
      "Brief Details": "Mangolpuri Flyover",
      "Authority \/ Client": "VEL\/DPWD",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 29,
      "Project Number": 33,
      "Brief Details": "EW Kota Bypass",
      "Authority \/ Client": "ITD\/NHAI",
      "Quantity": 30000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 30,
      "Project Number": 34,
      "Brief Details": "Azadpur Flyover",
      "Authority \/ Client": "NECL\/DPWD",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 31,
      "Project Number": 35,
      "Brief Details": "Yamuna Depot Filling",
      "Authority \/ Client": "SEL\/DMRC",
      "Quantity": 6000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 32,
      "Project Number": 36,
      "Brief Details": "ORR Flyover",
      "Authority \/ Client": "AfCONS\/DPWD",
      "Quantity": 12000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 33,
      "Project Number": 37,
      "Brief Details": "Panipat Flyover",
      "Authority \/ Client": "L&T\/NHAI",
      "Quantity": 3100,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 34,
      "Project Number": 38,
      "Brief Details": "ROB Bariyarpur",
      "Authority \/ Client": "SKT\/BPNL",
      "Quantity": 4000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 35,
      "Project Number": 39,
      "Brief Details": "Nagloi Flyover",
      "Authority \/ Client": "NECL\/DPWD",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 36,
      "Project Number": 40,
      "Brief Details": "Flyover Sec-14A",
      "Authority \/ Client": "NECL\/RITES",
      "Quantity": 3000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 37,
      "Project Number": 41,
      "Brief Details": "ROB at NH-1A",
      "Authority \/ Client": "IRCON\/NHAI",
      "Quantity": 900,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 38,
      "Project Number": 42,
      "Brief Details": "Sahadara Flyover",
      "Authority \/ Client": "NECL\/DPWD",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 39,
      "Project Number": 43,
      "Brief Details": "Bahdurgarh ROB",
      "Authority \/ Client": "BIL\/HPWD",
      "Quantity": 3000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 40,
      "Project Number": 44,
      "Brief Details": "Tohana ROB",
      "Authority \/ Client": "BIL\/HPWD",
      "Quantity": 3000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 41,
      "Project Number": 45,
      "Brief Details": "Charkhi Dadri ROB",
      "Authority \/ Client": "PSC\/HPWD",
      "Quantity": 3600,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 42,
      "Project Number": 46,
      "Brief Details": "ITO Road Flyover",
      "Authority \/ Client": "NECL\/DPWD",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 43,
      "Project Number": 47,
      "Brief Details": "Gazipur Flyover",
      "Authority \/ Client": "AfCONS\/DPWD",
      "Quantity": 5000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 44,
      "Project Number": 48,
      "Brief Details": "Neela Hauz Flyover",
      "Authority \/ Client": "VEL\/DPWD",
      "Quantity": 1200,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 45,
      "Project Number": 49,
      "Brief Details": "Anand Vihar Flyover",
      "Authority \/ Client": "VEL\/DPWD",
      "Quantity": 4800,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 48,
      "Project Number": 50,
      "Brief Details": "ROB Pathankot",
      "Authority \/ Client": "MVR\/NHAI",
      "Quantity": 14500,
      "Location": "Jammu & Kashmir",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 46,
      "Project Number": 51,
      "Brief Details": "Barapulla Nallah Flyover",
      "Authority \/ Client": "DSC\/DELHI PWD",
      "Quantity": 4000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 52
     },
     {
      "WS No.": 55,
      "Project Number": 53,
      "Brief Details": "Zirakpur-Kalka",
      "Authority \/ Client": "C&C\/HEL",
      "Quantity": 23000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 54
     },
     {
      "WS No.": 47,
      "Project Number": 55,
      "Brief Details": "Flyover at UP Link Road",
      "Authority \/ Client": "DSC\/DELHI PWD",
      "Quantity": 4000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 52,
      "Project Number": 56,
      "Brief Details": "Dadri",
      "Authority \/ Client": "GEL\/GNOIDA",
      "Quantity": 4000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 56,
      "Project Number": 57,
      "Brief Details": "CWG Village Flyover",
      "Authority \/ Client": "Gammon\/DDA",
      "Quantity": 2700,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 54,
      "Project Number": 58,
      "Brief Details": "Flyover at Army Cant Bhatinda",
      "Authority \/ Client": "Pawansut\/BRO",
      "Quantity": 8000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 57,
      "Project Number": 61,
      "Brief Details": "Kishangarh-Beawar",
      "Authority \/ Client": "ISOLUX\/NHAI",
      "Quantity": 100000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 58,
      "Project Number": 62,
      "Brief Details": "Nagpur Bypass",
      "Authority \/ Client": "OSE",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 59,
      "Project Number": 63,
      "Brief Details": "Indore Bypass",
      "Authority \/ Client": "GPL",
      "Quantity": 55000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 64,
      "Brief Details": "Sun & Sand VUP",
      "Authority \/ Client": "OSE",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 60,
      "Project Number": 66,
      "Brief Details": "Bhilai Flyover",
      "Authority \/ Client": "SPS",
      "Quantity": 7000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Chhattisgarh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 62,
      "Project Number": 67,
      "Brief Details": "ROB Kota",
      "Authority \/ Client": "VEL\/UIT KOTA",
      "Quantity": 16000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 63,
      "Project Number": 68,
      "Brief Details": "Flyover Kota",
      "Authority \/ Client": "VEL\/UIT KOTA",
      "Quantity": 1000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 65,
      "Project Number": 69,
      "Brief Details": "Ropar Bypass",
      "Authority \/ Client": "SPS",
      "Quantity": 9300,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 64,
      "Project Number": 70,
      "Brief Details": "Jaipur Metro",
      "Authority \/ Client": "ITD",
      "Quantity": 7000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 66,
      "Project Number": 71,
      "Brief Details": "NH30 Bakhtiyarpur",
      "Authority \/ Client": "C&C+ BSC",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 67,
      "Project Number": 72,
      "Brief Details": "Jhajjar Bypass",
      "Authority \/ Client": "VIL",
      "Quantity": 25000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 69,
      "Project Number": 73,
      "Brief Details": "Kota ROB",
      "Authority \/ Client": "HCIL",
      "Quantity": 4000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 68,
      "Project Number": 74,
      "Brief Details": "Bagodara-Vasad Gujrat",
      "Authority \/ Client": "GVK",
      "Quantity": 60000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 70,
      "Project Number": 75,
      "Brief Details": "NH2",
      "Authority \/ Client": "ICI+C&C",
      "Quantity": 60000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 71,
      "Project Number": 76,
      "Brief Details": "Kota-Deoli",
      "Authority \/ Client": "PBA+GVK",
      "Quantity": 15000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 72,
      "Project Number": 77,
      "Brief Details": "Panchkula-Yamunanagar",
      "Authority \/ Client": "VIL",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 73,
      "Project Number": 78,
      "Brief Details": "Flyover at Baily Road",
      "Authority \/ Client": "RBL",
      "Quantity": 6000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 74,
      "Project Number": 79,
      "Brief Details": "Danapur ROB",
      "Authority \/ Client": "BSC-C&C (JV)",
      "Quantity": 4000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 77,
      "Project Number": 80,
      "Brief Details": "VUP & ROB Kota",
      "Authority \/ Client": "PBA+GVK",
      "Quantity": 9000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 75,
      "Project Number": 81,
      "Brief Details": "ROB Bhuj",
      "Authority \/ Client": "VEL\/GSRDC",
      "Quantity": 11500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 76,
      "Project Number": 82,
      "Brief Details": "ROB Bhachau",
      "Authority \/ Client": "VEL\/GSRDC",
      "Quantity": 11500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 78,
      "Project Number": 83,
      "Brief Details": "Etawah & Chakeri ",
      "Authority \/ Client": "OSE",
      "Quantity": 55500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 79,
      "Project Number": 84,
      "Brief Details": "Mangolpuri ORR",
      "Authority \/ Client": "ITD\/DPWD",
      "Quantity": 6000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 80,
      "Project Number": 85,
      "Brief Details": "Madhuwan Chowk ORR",
      "Authority \/ Client": "ITD\/DPWD",
      "Quantity": 6000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 81,
      "Project Number": 86,
      "Brief Details": "Gaundhali Bridge",
      "Authority \/ Client": "SPS",
      "Quantity": 8000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Goa",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 89,
      "Project Number": 87,
      "Brief Details": "Delhi-Agra Road",
      "Authority \/ Client": "RIPL+L&T",
      "Quantity": 80000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 83,
      "Project Number": 88,
      "Brief Details": "NH-8",
      "Authority \/ Client": "GHV+ITNL",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 84,
      "Project Number": 89,
      "Brief Details": "Gurugram ROB",
      "Authority \/ Client": "SPS",
      "Quantity": 12000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 82,
      "Project Number": 90,
      "Brief Details": "Falgu Bridge Gaya",
      "Authority \/ Client": "SPS",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 85,
      "Project Number": 91,
      "Brief Details": "Mithapur Flyover",
      "Authority \/ Client": "SPS",
      "Quantity": 3000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 87,
      "Project Number": 92,
      "Brief Details": "Durgapur NH-2",
      "Authority \/ Client": "OSE",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "West Bengal",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 86,
      "Project Number": 93,
      "Brief Details": "Inner Ring Road Agra",
      "Authority \/ Client": "HGIEL\/ADA",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 90,
      "Project Number": 95,
      "Brief Details": "Munirka Flyover",
      "Authority \/ Client": "HCC\/DPWD",
      "Quantity": 3000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 88,
      "Project Number": 96,
      "Brief Details": "Nagpur Bypass",
      "Authority \/ Client": "OSE",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharashtra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 91,
      "Project Number": 97,
      "Brief Details": "Valecha Chowk Flyover",
      "Authority \/ Client": "VIL",
      "Quantity": 3000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 92,
      "Project Number": 98,
      "Brief Details": "Nagpur Betul NH69",
      "Authority \/ Client": "OSE",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharashtra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 93,
      "Project Number": 99,
      "Brief Details": "ROB Dwarka Mithapur",
      "Authority \/ Client": "VISPL",
      "Quantity": 5000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 94,
      "Project Number": 100,
      "Brief Details": "ALEP Pkg-2",
      "Authority \/ Client": "AFCONS\/UPEIDA",
      "Quantity": 22000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 95,
      "Project Number": 101,
      "Brief Details": "NH148D",
      "Authority \/ Client": "SCC",
      "Quantity": 13000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 96,
      "Project Number": 102,
      "Brief Details": "Muzaffarnagar- Saharanpur",
      "Authority \/ Client": "APCO",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 97,
      "Project Number": 103,
      "Brief Details": "Dadri ROB",
      "Authority \/ Client": "UPSBC",
      "Quantity": 6000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 98,
      "Project Number": 104,
      "Brief Details": "Harike Bypass",
      "Authority \/ Client": "SPS",
      "Quantity": 6000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 99,
      "Project Number": 105,
      "Brief Details": "NH123 at Dholpur ",
      "Authority \/ Client": "HGIEL",
      "Quantity": 30000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 100,
      "Project Number": 106,
      "Brief Details": "Mithapur Crossing",
      "Authority \/ Client": "MFCEPL",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 101,
      "Project Number": 107,
      "Brief Details": "Sakaddi ROB",
      "Authority \/ Client": "BSCPL\/BSRDC",
      "Quantity": 13000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 102,
      "Project Number": 108,
      "Brief Details": "Barapulla Flyover",
      "Authority \/ Client": "L&T\/DPWD",
      "Quantity": 2000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Delhi",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 103,
      "Project Number": 110,
      "Brief Details": "NH3 Guna-Shivpuri",
      "Authority \/ Client": "RIPPL\/IRCON",
      "Quantity": 28000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 104,
      "Project Number": 111,
      "Brief Details": "Northern ROB",
      "Authority \/ Client": "RIPPL\/NHAI",
      "Quantity": 11000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 112,
      "Brief Details": "Jahota ROB",
      "Authority \/ Client": "RCC",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 113,
      "Brief Details": "Nakodar NH71",
      "Authority \/ Client": "PIL",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 105,
      "Project Number": 115,
      "Brief Details": "Agra Inner Road Phase-II",
      "Authority \/ Client": "RP Infra\/ADA",
      "Quantity": 32000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 118,
      "Brief Details": "Bihta Daniyawan",
      "Authority \/ Client": "BSCPL",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 106,
      "Project Number": 120,
      "Brief Details": "Lalsot-Dausa",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 75000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 107,
      "Project Number": 121,
      "Brief Details": "Kharar-Ludhiana NH5",
      "Authority \/ Client": "ABL\/NHAI",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 108,
      "Project Number": 122,
      "Brief Details": "Delhi-Meerut",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 55000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 109,
      "Project Number": 124,
      "Brief Details": "Ranastlam-Anandpuram",
      "Authority \/ Client": "ABL\/NHAI",
      "Quantity": 85000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Andhra Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 110,
      "Project Number": 126,
      "Brief Details": "Amrawati-Chikli",
      "Authority \/ Client": "OSE\/NHAI",
      "Quantity": 125000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 114,
      "Project Number": 127,
      "Brief Details": "Jhansi-Khajuraho",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 180000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 111,
      "Project Number": 128,
      "Brief Details": "Darah-Jhalawar",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 91000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 112,
      "Project Number": 129,
      "Brief Details": "NH-45 Sethiyathope",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 91000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 115,
      "Project Number": 130,
      "Brief Details": "Ranastlam",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 80000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Andhra Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 116,
      "Project Number": 131,
      "Brief Details": "Icchapuram",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 67000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Andhra Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 127,
      "Project Number": 132,
      "Brief Details": "Hiran River",
      "Authority \/ Client": "Wagad\/MoRTH",
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Madhya Pradesh"
     },
     {
      "WS No.": 117,
      "Project Number": 133,
      "Brief Details": "Aligarh-Kanpur",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 118,
      "Project Number": 134,
      "Brief Details": "Chakeri-Allahabad",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 128000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 135
     },
     {
      "WS No.": 120,
      "Project Number": 136,
      "Brief Details": "PEP-V",
      "Authority \/ Client": "PNC\/UPEIDA",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 119,
      "Project Number": 137,
      "Brief Details": "PEP-VIII",
      "Authority \/ Client": "OSE\/UPEIDA",
      "Quantity": 100000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 121,
      "Project Number": 138,
      "Brief Details": "Kallagam-Meensurutti",
      "Authority \/ Client": "OSE\/NHAI",
      "Quantity": 100000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 123,
      "Project Number": 139,
      "Brief Details": "Singhara-Binjhabahal",
      "Authority \/ Client": "MCL\/NHAI",
      "Quantity": 22000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Orissa",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 122,
      "Project Number": 140,
      "Brief Details": "Dewas Bypass",
      "Authority \/ Client": "IJM\/MPRDC",
      "Quantity": 14000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 124,
      "Project Number": 141,
      "Brief Details": "NME",
      "Authority \/ Client": "PNC\/MSRDC",
      "Quantity": 38000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 125,
      "Project Number": 142,
      "Brief Details": "Karaipettai-Walajapet",
      "Authority \/ Client": "SPK\/NHAI",
      "Quantity": 67000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 128,
      "Project Number": 143,
      "Brief Details": "Chennai-Tada Project",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 51000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 129,
      "Project Number": 144,
      "Brief Details": "Chennai-Tada Project",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 25000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 130,
      "Project Number": 145,
      "Brief Details": "LRR",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 100000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 131,
      "Project Number": 146,
      "Brief Details": "DVE-V",
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 42000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 132,
      "Project Number": 147,
      "Brief Details": "DVE-VI",
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 22000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 133,
      "Project Number": 148,
      "Brief Details": "VRR",
      "Authority \/ Client": "MCC\/NHAI",
      "Quantity": 150000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 149,
      "Brief Details": "VRR A2",
      "Authority \/ Client": "MCC\/NHAI",
      "Quantity": 17000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 134,
      "Project Number": 150,
      "Brief Details": "BEP-I",
      "Authority \/ Client": "APCO\/UPEIDA",
      "Quantity": 65000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 135,
      "Project Number": 151,
      "Brief Details": "BEP-II",
      "Authority \/ Client": "APCO\/UPEIDA",
      "Quantity": 83000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 136,
      "Project Number": 152,
      "Brief Details": "Bikaner ROB",
      "Authority \/ Client": "MBL\/RPWD",
      "Quantity": 19000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 137,
      "Project Number": 153,
      "Brief Details": "Dimapur",
      "Authority \/ Client": "SCC\/NHIDCL",
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Assam",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 138,
      "Project Number": 154,
      "Brief Details": "KRRP",
      "Authority \/ Client": "Swastik\/NHAI",
      "Quantity": 55000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Telangana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 139,
      "Project Number": 155,
      "Brief Details": "CHP",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 170000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Karnataka",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 140,
      "Project Number": 156,
      "Brief Details": "ACP Pkg-3",
      "Authority \/ Client": "MCL\/NHAI",
      "Quantity": 58000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 141,
      "Project Number": 157,
      "Brief Details": "KIM-III",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 417000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 142,
      "Project Number": 158,
      "Brief Details": "SKRP",
      "Authority \/ Client": "DRN\/NHAI",
      "Quantity": 17000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 143,
      "Project Number": 159,
      "Brief Details": "Barasat",
      "Authority \/ Client": "KCC\/NHAI",
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 144,
      "Project Number": 160,
      "Brief Details": "Rewari Bypass",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 115000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 145,
      "Project Number": 161,
      "Brief Details": "DVE-8",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 19000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 145,
      "Project Number": 162,
      "Brief Details": "DVE-9",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 36000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 146,
      "Project Number": 163,
      "Brief Details": "AKP-5",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 150000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 148,
      "Project Number": 164,
      "Brief Details": "LRR",
      "Authority \/ Client": "PNC\/NHAI",
      "Type of Work": "Friction Slab cum Crash Barrier",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 149,
      "Project Number": 165,
      "Brief Details": "Aizawl-Tuipang",
      "Authority \/ Client": "ABCI\/NHIDCL",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 150,
      "Project Number": 166,
      "Brief Details": "DRN NH83",
      "Authority \/ Client": "DRN\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 151,
      "Project Number": 167,
      "Brief Details": "Devihalli-Hassan Sec. NH-75",
      "Authority \/ Client": "SRC\/NHAI",
      "Quantity": 52000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Karnataka",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 152,
      "Project Number": 168,
      "Brief Details": "KIM\/PKG-3",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 18000,
      "Type of Work": "Slope Protection (Chute Drain)",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 153,
      "Project Number": 169,
      "Brief Details": "DVE\/PKG-1",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 6000,
      "Type of Work": "Friction Slab cum Crash Barrier",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 154,
      "Project Number": 170,
      "Brief Details": "CHP",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 20000,
      "Type of Work": "Friction Slab cum Crash Barrier",
      "Location": "Karnataka",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 171,
      "Authority \/ Client": "GLOBE CIVIL\/DMRC",
      "Type of Work": "PET Geogrid with Large Panel Fascia"
     },
     {
      "WS No.": 155,
      "Project Number": 172,
      "Brief Details": "Aunta- Simaria Project",
      "Authority \/ Client": "WELSPUN\/NHAI",
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 156,
      "Project Number": 173,
      "Brief Details": "Chennai-Tidel Project",
      "Authority \/ Client": "SPL\/TNRDC",
      "Quantity": 2100,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 157,
      "Project Number": 174,
      "Brief Details": "DVE\/PKG-18",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 100000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 158,
      "Project Number": 175,
      "Brief Details": "KIM\/PKG-2",
      "Authority \/ Client": "PIL\/IRCON\/NHAI",
      "Quantity": 160000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 159,
      "Project Number": 176,
      "Brief Details": "SNRP\/PKG-1",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 160,
      "Project Number": 177,
      "Brief Details": "DVE-10",
      "Authority \/ Client": "DMIA\/NHAI",
      "Quantity": 23000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 161,
      "Project Number": 178,
      "Brief Details": "Asind-Mandal-3",
      "Authority \/ Client": "RIDPL\/MoRTH",
      "Quantity": 30000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 162,
      "Project Number": 179,
      "Brief Details": "Asind-Mandal-2",
      "Authority \/ Client": "RIDPL\/MoRTH",
      "Quantity": 22000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 163,
      "Project Number": 180,
      "Brief Details": "SNRP\/PKG-2",
      "Authority \/ Client": "RSDCPL\/NHAI",
      "Quantity": 64000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 164,
      "Project Number": 181,
      "Brief Details": "Champadanga SH-2",
      "Authority \/ Client": "KCC\/WBHDCL",
      "Quantity": 30000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "West Bengal",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 165,
      "Project Number": 182,
      "Brief Details": "Faridabad Bypass-2",
      "Authority \/ Client": "DRA\/NHAI",
      "Quantity": 198000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 166,
      "Project Number": 183,
      "Brief Details": "NH-2 Section",
      "Authority \/ Client": "WELSPUN\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Uttar Pradesh & Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 167,
      "Project Number": 184,
      "Brief Details": "MCPP NH-01",
      "Authority \/ Client": "WELSPUN\/NHAI",
      "Quantity": 24000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 168,
      "Project Number": 185,
      "Brief Details": "SNRP",
      "Authority \/ Client": "KASTURI\/NHAI",
      "Quantity": 15000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 186,
      "Authority \/ Client": "BIPL\/NHIDCL",
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 169,
      "Project Number": 187,
      "Brief Details": "Abohar NH-07",
      "Authority \/ Client": "CEIGALL\/NHAI",
      "Quantity": 61000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 188,
      "Authority \/ Client": "BIPL\/NHIDCL",
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 170,
      "Project Number": 189,
      "Brief Details": "DVE-16",
      "Authority \/ Client": "RIDPL\/NHAI",
      "Quantity": 25000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 171,
      "Project Number": 190,
      "Brief Details": "DVE-29",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 200000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 172,
      "Project Number": 191,
      "Brief Details": "DVE-29",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 6000,
      "Type of Work": "Slope Protection (Chute Drain)",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 173,
      "Project Number": 192,
      "Brief Details": "Zmorh",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 10000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 174,
      "Project Number": 193,
      "Brief Details": "ROB KDP Nh-12",
      "Authority \/ Client": "RKB\/NHAI",
      "Quantity": 3500,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 175,
      "Project Number": 194,
      "Brief Details": "ADP-02",
      "Authority \/ Client": "HIMALAYAN\/NHAI",
      "Quantity": 75000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 176,
      "Project Number": 195,
      "Brief Details": "DWKH Pkg-1",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 21000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 177,
      "Project Number": 196,
      "Brief Details": "DAK-10,11&12",
      "Authority \/ Client": "MKC\/NHAI",
      "Quantity": 250000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 178,
      "Project Number": 197,
      "Brief Details": "DVE-12",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 235000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 179,
      "Project Number": 198,
      "Brief Details": "ADP-04",
      "Authority \/ Client": "MKC\/NHAI",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 180,
      "Project Number": 199,
      "Brief Details": "ADP-02",
      "Authority \/ Client": "AYUSH PROCON\/NHAI",
      "Quantity": 15000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 181,
      "Project Number": 200,
      "Brief Details": "MABH",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 147000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Punjab",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 182,
      "Project Number": 201,
      "Brief Details": "DAK-07",
      "Authority \/ Client": "CEIGALL\/NHAI",
      "Quantity": 140000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 183,
      "Project Number": 202,
      "Brief Details": "K4",
      "Authority \/ Client": "YFC\/NHAI",
      "Quantity": 55000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 184,
      "Project Number": 203,
      "Brief Details": "Baghpat(GPL)",
      "Authority \/ Client": "CEIGALL\/NHAI",
      "Quantity": 45000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 185,
      "Project Number": 204,
      "Brief Details": "Aurangabad NH2",
      "Authority \/ Client": "SWASTIK\/WELSPUN\/NHAI",
      "Quantity": 52000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 205,
      "Authority \/ Client": "SWASTIK\/WELSPUN\/NHAI",
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Telangana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 186,
      "Project Number": 206,
      "Brief Details": "DAK-15",
      "Authority \/ Client": "VSEPL\/NHAI",
      "Quantity": 340000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 187,
      "Project Number": 207,
      "Brief Details": "AJRP-08",
      "Authority \/ Client": "MKC\/NHAI",
      "Quantity": 5000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 208,
      "Brief Details": "DAK-15 Execution",
      "Authority \/ Client": "VSEPL\/SSB",
      "Quantity": 340000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 188,
      "Project Number": 209,
      "Brief Details": "BIPL NH54",
      "Authority \/ Client": "ABCI\/NHIDCL",
      "Quantity": 16000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 189,
      "Project Number": 210,
      "Brief Details": "UGRP Pkg-2",
      "Authority \/ Client": "RIPL\/NHAI",
      "Quantity": 45000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 190,
      "Project Number": 211,
      "Brief Details": "MBRP-1C",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 65000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 191,
      "Project Number": 212,
      "Brief Details": "HBRP Pkg-3",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 192,
      "Project Number": 213,
      "Brief Details": "SGRP NH-29E",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 214,
      "Authority \/ Client": "Welspun\/Ayush\/NHAI",
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 193,
      "Project Number": 215,
      "Brief Details": "CGRG",
      "Authority \/ Client": "Welspun\/NHAI",
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Uttar Pradesh & Uttarakhand",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 194,
      "Project Number": 216,
      "Brief Details": "GPPL Pkg-4",
      "Authority \/ Client": "ABCI\/NHIDCL",
      "Quantity": 10000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 195,
      "Project Number": 217,
      "Brief Details": "KRR",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 130000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 196,
      "Project Number": 218,
      "Brief Details": "Kellani West",
      "Authority \/ Client": "APCO.\/NHAI",
      "Quantity": 0,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 197,
      "Project Number": 219,
      "Brief Details": "CGRG",
      "Authority \/ Client": "Welspun\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "Project Number": 220,
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 198,
      "Project Number": 221,
      "Brief Details": "Lift Irrigation",
      "Authority \/ Client": "MRP Associates",
      "Quantity": 0,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 199,
      "Project Number": 222,
      "Brief Details": "BCEP Pkg-1",
      "Authority \/ Client": "MCL.\/NHAI",
      "Quantity": 18000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Andhra Pradesh & Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 223,
      "Authority \/ Client": "DRN\/NHAI",
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 200,
      "Project Number": 224,
      "Brief Details": "RKP Jh-13",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jharkhand",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 201,
      "Project Number": 225,
      "Brief Details": "RKP Jh-10",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jharkhand",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 202,
      "Project Number": 226,
      "Brief Details": "Kaby",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 227,
      "Authority \/ Client": "DRB\/NHAI",
      "Quantity": 7000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 228,
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Rajasthan",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 203,
      "Project Number": 229,
      "Brief Details": "RS wall in Cement Plant",
      "Authority \/ Client": "SRC\/DALMIA",
      "Quantity": 12000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Assam",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 230,
      "Brief Details": "Khellani East",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 0,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Ongoing"
     },
     {
      "Project Number": 231,
      "Authority \/ Client": "Welspun\/NHAI",
      "Quantity": 0,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 204,
      "Project Number": 232,
      "Authority \/ Client": "Welspun\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Haryana",
      "Status of Work": "Ongoing"
     }
    ],
    "Final One for Website":[
     {
      "WS No.": 124,
      "Project Number": 232,
      "Brief Details": "Soil Nailing Work",
      "Authority \/ Client": "Welspun\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Haryana",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 123,
      "Project Number": 231,
      "Brief Details": "SNRP Pondicherry",
      "Authority \/ Client": "Welspun\/NHAI",
      "Quantity": 15000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 122,
      "Project Number": 230,
      "Brief Details": "Khellani East Portal",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 3000,
      "Type of Work": "SMSE Wall",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 121,
      "Project Number": 229,
      "Brief Details": "RS wall in Cement Plant",
      "Authority \/ Client": "SRC\/DALMIA",
      "Quantity": 12000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Assam",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 120,
      "Project Number": 228,
      "Brief Details": "Soil Nailing Work",
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Rajasthan",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 119,
      "Project Number": 226,
      "Brief Details": "KABY",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 118,
      "Project Number": 225,
      "Brief Details": "RKP Jh-10",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jharkhand",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 117,
      "Project Number": 224,
      "Brief Details": "RKP Jh-13",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jharkhand",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 116,
      "Project Number": 223,
      "Brief Details": "Slope Protection Work",
      "Authority \/ Client": "DRN\/NHAI",
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 115,
      "Project Number": 222,
      "Brief Details": "BCEP Pkg-1",
      "Authority \/ Client": "MCL.\/NHAI",
      "Quantity": 18000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Andhra Pradesh & Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 114,
      "Project Number": 221,
      "Brief Details": "Lift Irrigation",
      "Authority \/ Client": "MRP Associates",
      "Quantity": 0,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 113,
      "Project Number": 220,
      "Brief Details": "Soil Nailing Work",
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 112,
      "Project Number": 219,
      "Brief Details": "CGRG & GSY Nailing Work",
      "Authority \/ Client": "Welspun\/NHAI",
      "Quantity": 0,
      "Type of Work": "SDA & Driven Soil Nailing",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 111,
      "Project Number": 218,
      "Brief Details": "Kellani West Portal",
      "Authority \/ Client": "APCO.\/NHAI",
      "Quantity": 2000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 110,
      "Project Number": 217,
      "Brief Details": "Karnal Ring Road",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 130000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 109,
      "Project Number": 216,
      "Brief Details": "GPPL Pkg-4",
      "Authority \/ Client": "ABCI\/NHIDCL",
      "Quantity": 10000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 108,
      "Project Number": 215,
      "Brief Details": "CGRG & GSY Inspection Work",
      "Authority \/ Client": "Welspun\/NHAI",
      "Type of Work": "RS Wall Inspection Work",
      "Location": "Uttar Pradesh & Uttarakhand",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 107,
      "Project Number": 213,
      "Brief Details": "SGRP NH-29E",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 106,
      "Project Number": 212,
      "Brief Details": "HBRP Pkg-3",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 105,
      "Project Number": 211,
      "Brief Details": "MBRP-1C",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 65000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 104,
      "Project Number": 210,
      "Brief Details": "UGRP Pkg-2",
      "Authority \/ Client": "RIPL\/NHAI",
      "Quantity": 45000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 103,
      "Project Number": 209,
      "Brief Details": "BIPL NH54",
      "Authority \/ Client": "ABCI\/NHIDCL",
      "Quantity": 16000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 102,
      "Project Number": 206,
      "Brief Details": "DAK-15",
      "Authority \/ Client": "VSEPL\/NHAI",
      "Quantity": 340000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 101,
      "Project Number": 205,
      "Brief Details": "KRRP",
      "Authority \/ Client": "SWASTIK\/WELSPUN\/NHAI",
      "Quantity": 8000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Telangana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 100,
      "Project Number": 204,
      "Brief Details": "Aurangabad NH2",
      "Authority \/ Client": "SWASTIK\/WELSPUN\/NHAI",
      "Quantity": 52000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 99,
      "Project Number": 203,
      "Brief Details": "Baghpat(GPL)",
      "Authority \/ Client": "CEIGALL\/NHAI",
      "Quantity": 45000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 98,
      "Project Number": 202,
      "Brief Details": "K4 Ideas",
      "Authority \/ Client": "YFC\/NHAI",
      "Quantity": 55000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 97,
      "Project Number": 201,
      "Brief Details": "DAK-07",
      "Authority \/ Client": "CEIGALL\/NHAI",
      "Quantity": 140000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 96,
      "Project Number": 200,
      "Brief Details": "MABH",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 147000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Punjab",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 95,
      "Project Number": 199,
      "Brief Details": "ADP-02",
      "Authority \/ Client": "AYUSH PROCON\/NHAI",
      "Quantity": 15000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 94,
      "Project Number": 198,
      "Brief Details": "ADP-04",
      "Authority \/ Client": "MKC\/NHAI",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 93,
      "Project Number": 197,
      "Brief Details": "DVE-12",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 235000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 92,
      "Project Number": 196,
      "Brief Details": "DAK-10,11&12",
      "Authority \/ Client": "MKC\/NHAI",
      "Quantity": 250000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 91,
      "Project Number": 195,
      "Brief Details": "DWKH Pkg-1",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 21000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 90,
      "Project Number": 194,
      "Brief Details": "ADP-02",
      "Authority \/ Client": "HIMALAYAN\/NHAI",
      "Quantity": 75000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 89,
      "Project Number": 192,
      "Brief Details": "Zmorh",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 10000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Jammu & Kashmir",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 88,
      "Project Number": 191,
      "Brief Details": "DVE-29",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 6000,
      "Type of Work": "Slope Protection (Chute Drain)",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 87,
      "Project Number": 190,
      "Brief Details": "DVE-29",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 200000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 86,
      "Project Number": 189,
      "Brief Details": "DVE-16",
      "Authority \/ Client": "RIDPL\/NHAI",
      "Quantity": 25000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 85,
      "Project Number": 187,
      "Brief Details": "Abohar NH-07",
      "Authority \/ Client": "CEIGALL\/NHAI",
      "Quantity": 61000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 84,
      "Project Number": 184,
      "Brief Details": "MCPP NH-01",
      "Authority \/ Client": "WELSPUN\/NHAI",
      "Quantity": 24000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 83,
      "Project Number": 183,
      "Brief Details": "NH-2 Section",
      "Authority \/ Client": "WELSPUN\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Uttar Pradesh & Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 82,
      "Project Number": 182,
      "Brief Details": "Faridabad Bypass-2",
      "Authority \/ Client": "DRA\/NHAI",
      "Quantity": 198000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 81,
      "Project Number": 181,
      "Brief Details": "Champadanga SH-2",
      "Authority \/ Client": "KCC\/WBHDCL",
      "Quantity": 30000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "West Bengal",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 80,
      "Project Number": 180,
      "Brief Details": "SNRP\/PKG-2",
      "Authority \/ Client": "RSDCPL\/NHAI",
      "Quantity": 64000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 79,
      "Project Number": 179,
      "Brief Details": "Asind-Mandal-2",
      "Authority \/ Client": "RIDPL\/MoRTH",
      "Quantity": 22000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 78,
      "Project Number": 178,
      "Brief Details": "Asind-Mandal-3",
      "Authority \/ Client": "RIDPL\/MoRTH",
      "Quantity": 30000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 77,
      "Project Number": 177,
      "Brief Details": "DVE-10",
      "Authority \/ Client": "DMIA\/NHAI",
      "Quantity": 23000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 76,
      "Project Number": 176,
      "Brief Details": "SNRP\/PKG-1",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 75,
      "Project Number": 175,
      "Brief Details": "KIM\/PKG-2",
      "Authority \/ Client": "PIL\/IRCON\/NHAI",
      "Quantity": 160000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 74,
      "Project Number": 174,
      "Brief Details": "DVE\/PKG-18",
      "Authority \/ Client": "GRIL\/NHAI",
      "Quantity": 100000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 73,
      "Project Number": 170,
      "Brief Details": "CHP",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 20000,
      "Type of Work": "Friction Slab cum Crash Barrier",
      "Location": "Karnataka",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 72,
      "Project Number": 169,
      "Brief Details": "DVE\/PKG-1",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 6000,
      "Type of Work": "Friction Slab cum Crash Barrier",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 71,
      "Project Number": 168,
      "Brief Details": "KIM\/PKG-3",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 18000,
      "Type of Work": "Slope Protection (Chute Drain)",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 70,
      "Project Number": 167,
      "Brief Details": "Devihalli-Hassan Sec. NH-75",
      "Authority \/ Client": "SRC\/NHAI",
      "Quantity": 52000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Karnataka",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 69,
      "Project Number": 166,
      "Brief Details": "DRN NH83",
      "Authority \/ Client": "DRN\/NHAI",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 68,
      "Project Number": 165,
      "Brief Details": "Aizawl-Tuipang",
      "Authority \/ Client": "ABCI\/NHIDCL",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Mizoram",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 67,
      "Project Number": 164,
      "Brief Details": "LRR",
      "Authority \/ Client": "PNC\/NHAI",
      "Type of Work": "Friction Slab cum Crash Barrier",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 66,
      "Project Number": 163,
      "Brief Details": "AKP-5",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 150000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 65,
      "Project Number": 162,
      "Brief Details": "DVE-9",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 36000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 64,
      "Project Number": 161,
      "Brief Details": "DVE-8",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 19000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 63,
      "Project Number": 160,
      "Brief Details": "Rewari Bypass",
      "Authority \/ Client": "HGIEL\/NHAI",
      "Quantity": 115000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 62,
      "Project Number": 159,
      "Brief Details": "Barasat",
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 120000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 61,
      "Project Number": 157,
      "Brief Details": "KIM-III",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 417000,
      "Type of Work": "Slope Protection by -Fine Grass\/Vetiver\/Coirmat\/Geocell",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 60,
      "Project Number": 156,
      "Brief Details": "ACP Pkg-3",
      "Authority \/ Client": "MCL\/NHAI",
      "Quantity": 58000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 59,
      "Project Number": 155,
      "Brief Details": "CHP",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 170000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Karnataka",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 58,
      "Project Number": 154,
      "Brief Details": "KRRP",
      "Authority \/ Client": "Swastik\/NHAI",
      "Quantity": 55000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Telangana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 57,
      "Project Number": 152,
      "Brief Details": "Bikaner ROB",
      "Authority \/ Client": "MBL\/RPWD",
      "Quantity": 19000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 56,
      "Project Number": 151,
      "Brief Details": "BEP-II",
      "Authority \/ Client": "APCO\/UPEIDA",
      "Quantity": 83000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 55,
      "Project Number": 150,
      "Brief Details": "BEP-I",
      "Authority \/ Client": "APCO\/UPEIDA",
      "Quantity": 65000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 54,
      "Project Number": 149,
      "Brief Details": "VRR A2",
      "Authority \/ Client": "MCC\/NHAI",
      "Quantity": 17000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 53,
      "Project Number": 148,
      "Brief Details": "VRR",
      "Authority \/ Client": "MCC\/NHAI",
      "Quantity": 150000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 52,
      "Project Number": 147,
      "Brief Details": "DVE-VI",
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 22000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 51,
      "Project Number": 146,
      "Brief Details": "DVE-V",
      "Authority \/ Client": "KCC\/NHAI",
      "Quantity": 42000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 50,
      "Project Number": 145,
      "Brief Details": "LRR",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 100000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 49,
      "Project Number": 144,
      "Brief Details": "Chennai-Tada Project",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 25000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 48,
      "Project Number": 143,
      "Brief Details": "Chennai-Tada Project",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 51000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 47,
      "Project Number": 142,
      "Brief Details": "Karaipettai-Walajapet",
      "Authority \/ Client": "SPK\/NHAI",
      "Quantity": 67000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Ongoing"
     },
     {
      "WS No.": 46,
      "Project Number": 141,
      "Brief Details": "NME",
      "Authority \/ Client": "PNC\/MSRDC",
      "Quantity": 38000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 45,
      "Project Number": 139,
      "Brief Details": "Singhara-Binjhabahal",
      "Authority \/ Client": "MCL\/NHAI",
      "Quantity": 22000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Orissa",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 44,
      "Project Number": 138,
      "Brief Details": "Kallagam-Meensurutti",
      "Authority \/ Client": "OSE\/NHAI",
      "Quantity": 100000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 43,
      "Project Number": 137,
      "Brief Details": "PEP-VIII",
      "Authority \/ Client": "OSE\/UPEIDA",
      "Quantity": 100000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 42,
      "Project Number": 136,
      "Brief Details": "PEP-V",
      "Authority \/ Client": "PNC\/UPEIDA",
      "Quantity": 50000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 41,
      "Project Number": 134,
      "Brief Details": "Chakeri-Allahabad",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 128000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 40,
      "Project Number": 133,
      "Brief Details": "Aligarh-Kanpur",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 70000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 39,
      "Project Number": 131,
      "Brief Details": "Icchapuram",
      "Authority \/ Client": "SPL\/NHAI",
      "Quantity": 67000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Andhra Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 38,
      "Project Number": 130,
      "Brief Details": "Ranastlam",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 80000,
      "Type of Work": "PET Geostrap with Large Panel Fascia",
      "Location": "Andhra Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 37,
      "Project Number": 129,
      "Brief Details": "SCP",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 91000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Tamil Nadu",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 36,
      "Project Number": 128,
      "Brief Details": "Darah-Jhalawar",
      "Authority \/ Client": "PIL\/NHAI",
      "Quantity": 91000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 35,
      "Project Number": 127,
      "Brief Details": "Jhansi-Khajuraho",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 180000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 34,
      "Project Number": 126,
      "Brief Details": "Amrawati-Chikli",
      "Authority \/ Client": "OSE\/NHAI",
      "Quantity": 125000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 33,
      "Project Number": 124,
      "Brief Details": "Ranastlam-Anandpuram",
      "Authority \/ Client": "ABL\/NHAI",
      "Quantity": 85000,
      "Type of Work": "PET Geogrid with RS Block Fascia",
      "Location": "Andhra Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 32,
      "Project Number": 122,
      "Brief Details": "Delhi-Meerut",
      "Authority \/ Client": "APCO\/NHAI",
      "Quantity": 55000,
      "Type of Work": "Ribbed Steel Strip with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 31,
      "Project Number": 121,
      "Brief Details": "Kharar-Ludhiana NH5",
      "Authority \/ Client": "ABL\/NHAI",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 30,
      "Project Number": 120,
      "Brief Details": "Lalsot-Dausa",
      "Authority \/ Client": "PNC\/NHAI",
      "Quantity": 75000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 29,
      "Project Number": 115,
      "Brief Details": "Agra Inner Road Phase-II",
      "Authority \/ Client": "RP Infra\/ADA",
      "Quantity": 32000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 28,
      "Project Number": 113,
      "Brief Details": "Nakodar NH71",
      "Authority \/ Client": "PIL",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 27,
      "Project Number": 110,
      "Brief Details": "NH3 Guna-Shivpuri",
      "Authority \/ Client": "RIPPL\/IRCON",
      "Quantity": 28000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 26,
      "Project Number": 105,
      "Brief Details": "NH123 at Dholpur ",
      "Authority \/ Client": "HGIEL",
      "Quantity": 30000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 25,
      "Project Number": 102,
      "Brief Details": "Muzaffarnagar- Saharanpur",
      "Authority \/ Client": "APCO",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 24,
      "Project Number": 100,
      "Brief Details": "ALEP Pkg-2",
      "Authority \/ Client": "AFCONS\/UPEIDA",
      "Quantity": 22000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 23,
      "Project Number": 98,
      "Brief Details": "Nagpur Betul NH69",
      "Authority \/ Client": "OSE",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharashtra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 22,
      "Project Number": 96,
      "Brief Details": "Nagpur Bypass",
      "Authority \/ Client": "OSE",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharashtra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 21,
      "Project Number": 93,
      "Brief Details": "Inner Ring Road Agra",
      "Authority \/ Client": "HGIEL\/ADA",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 20,
      "Project Number": 92,
      "Brief Details": "Durgapur NH-2",
      "Authority \/ Client": "OSE",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "West Bengal",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 19,
      "Project Number": 88,
      "Brief Details": "NH-8",
      "Authority \/ Client": "GHV+ITNL",
      "Quantity": 20000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 18,
      "Project Number": 87,
      "Brief Details": "Delhi-Agra Road",
      "Authority \/ Client": "RIPL+L&T",
      "Quantity": 80000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 17,
      "Project Number": 86,
      "Brief Details": "Gaundhali Bridge",
      "Authority \/ Client": "SPS",
      "Quantity": 8000,
      "Type of Work": "PET Geogrid with Gabion Fascia",
      "Location": "Goa",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 16,
      "Project Number": 83,
      "Brief Details": "Etawah & Chakeri ",
      "Authority \/ Client": "OSE",
      "Quantity": 55500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 15,
      "Project Number": 77,
      "Brief Details": "Panchkula-Yamunanagar",
      "Authority \/ Client": "VIL",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 14,
      "Project Number": 75,
      "Brief Details": "NH2",
      "Authority \/ Client": "ICI+C&C",
      "Quantity": 60000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 13,
      "Project Number": 74,
      "Brief Details": "Bagodara-Vasad Gujrat",
      "Authority \/ Client": "GVK",
      "Quantity": 60000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Gujrat",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 12,
      "Project Number": 72,
      "Brief Details": "Jhajjar Bypass",
      "Authority \/ Client": "VIL",
      "Quantity": 25000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 11,
      "Project Number": 71,
      "Brief Details": "NH30 Bakhtiyarpur",
      "Authority \/ Client": "C&C+ BSC",
      "Quantity": 40000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Bihar",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 10,
      "Project Number": 63,
      "Brief Details": "Indore Bypass",
      "Authority \/ Client": "GPL",
      "Quantity": 55000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Madhya Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 9,
      "Project Number": 62,
      "Brief Details": "Nagpur Bypass",
      "Authority \/ Client": "OSE",
      "Quantity": 50000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Maharastra",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 8,
      "Project Number": 61,
      "Brief Details": "Kishangarh-Beawar",
      "Authority \/ Client": "ISOLUX\/NHAI",
      "Quantity": 100000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 7,
      "Project Number": 53,
      "Brief Details": "Zirakpur-Kalka",
      "Authority \/ Client": "C&C\/HEL",
      "Quantity": 23000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Haryana",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 6,
      "Project Number": 33,
      "Brief Details": "EW Kota Bypass",
      "Authority \/ Client": "ITD\/NHAI",
      "Quantity": 30000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 5,
      "Project Number": 31,
      "Brief Details": "EW Orai- Bhognipur",
      "Authority \/ Client": "KMCCL\/NHAI",
      "Quantity": 31000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 4,
      "Project Number": 27,
      "Brief Details": "NH-1A ROB",
      "Authority \/ Client": "GDCL\/NHAI",
      "Quantity": 20500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Punjab",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 3,
      "Project Number": 24,
      "Brief Details": "EW UP1 & UP3",
      "Authority \/ Client": "OSE\/NHAI",
      "Quantity": 85000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 2,
      "Project Number": 21,
      "Brief Details": "EW Corrdor RJ-10",
      "Authority \/ Client": "KMCCL\/NHAI",
      "Quantity": 44500,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Rajasthan",
      "Status of Work": "Completed"
     },
     {
      "WS No.": 1,
      "Project Number": 9,
      "Brief Details": "ROB6\/1 Kanpur",
      "Authority \/ Client": "Somdatt Buiders\/NHAI",
      "Quantity": 16000,
      "Type of Work": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "Status of Work": "Completed"
     },
     {
      "Quantity": 7581500
     }
    ]
    };

  const Row = ({ index, style }) => (
    <div
      style={style}
      className="flex bg-white border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 ease-in-out shadow-sm rounded-lg mb-2"
    >
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].WS}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].ProjectNumber}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].BriefDetails}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].AuthorityClient}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].Quantity}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].TypeofWork}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].Location}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].StatusofWork}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate__animated animate__fadeInDown">
          Welcome to Earthcon Systems!
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full py-6 bg-white shadow-md z-10">
        <h2 className="text-3xl font-bold text-center text-orange-600 animate__animated animate__fadeInDown">
          Projects Overview
        </h2>
        <p className="text-center text-gray-600">Earthcon Systems (India) Pvt. Ltd.</p>
      </header>

      {/* Main Content */}
      <section id="main-container" className="pt-32 pb-15">
        <div className="container mx-auto px-4">
          {/* Projects List Title */}
          <div className="text-center mt-8 mb-8">
            <h3 className="text-3xl font-semibold text-blue-600">
              <i className="fa fa-newspaper-o" aria-hidden="true"></i> Projects List
            </h3>
          </div>

          {/* Project List */}
          <div className="overflow-auto mt-5 shadow-md rounded-lg bg-white">
            <List
              height={400}
              itemCount={projects.length}
              itemSize={80} // Increased item height to accommodate content
              width="100%"
            >
              {Row}
            </List>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-white shadow-inner mt-8">
        <p className="text-center text-gray-600">&copy; 2024 Earthcon Systems. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
