# DiagnoSure – AI-Powered Multi-Agent Diagnostic Assistant

**Team PixelPops**  
Kriya Mehta • Prachi Barhate • Reetika Gupta • Arushi Jain 

---

## Overview

**DiagnoSure** is an AI-powered healthcare platform designed to assist **patients, doctors, and pharmacists** in accurate and accessible medical diagnostics.  
It uses a **multi-agent workflow** where specialized AI agents collaborate to analyze symptoms, interpret prescriptions, check drug interactions, and provide reliable insights in multiple languages.

This system aims to reduce **misdiagnosis, prescription errors, and inefficiencies** in healthcare delivery through explainable, data-driven intelligence.

---

## Problem Statement

Modern healthcare faces increasing diagnostic errors and communication gaps due to:
- Vague or incomplete symptom descriptions  
- Misread handwritten prescriptions  
- Limited multilingual accessibility  
- Lack of drug safety and interaction checks  
- Overloaded doctors with repetitive, manual work  

These issues lead to patient risk, high system costs, and reduced trust.

---

## Proposed Solution

DiagnoSure integrates **AI agents** to automate and improve the entire diagnostic workflow.

| Goal | Solution |
|------|-----------|
| Improve Accuracy | Multi-agent collaboration and medical literature integration |
| Enhance Clarity | Simplifies prescription details for patients |
| Ensure Safety | Automated drug interaction and safety checks |
| Increase Accessibility | Voice and multilingual support (English, Hindi, and others) |
| Boost Efficiency | Reduces repetitive doctor workload by 30–40% |

---

## System Architecture

**Workflow:**  
User → Orchestrator → Symptom Analysis → Diagnosis → Safety Check → Literature & Case Retrieval → Explanation → Feedback Learning → Output

**Agents Involved:**
- **Symptom Agent:** Extracts key symptoms via NLP and Named Entity Recognition (NER)  
- **Diagnosis Agent:** Generates differential diagnosis hypotheses using medical LLMs (e.g., DxGPT)  
- **Literature Agent:** Retrieves medical evidence via PubMed and ClinicalTrial APIs  
- **Case Retrieval Agent:** Fetches similar patient cases from trusted health APIs  
- **Explainability Agent:** Converts complex findings into user-friendly summaries using RAG + LLMs  
- **Safety Agent:** Performs drug interaction and dosage safety checks  
- **Learning Agent:** Improves continuously from user feedback and validation  
- **Orchestrator:** Manages all communication between agents

---

## Key Features

### 1. Multi-Agent Collaboration and Symptom Checker
- NLP-powered symptom extraction and diagnostic reasoning  
- Integration with public medical databases for data-backed insights  

### 2. Multi-Modal Patient Interaction
- Chat-based and voice-based interfaces (React + Node.js + Whisper + gTTS)  
- Supports multilingual queries and responses  

### 3. Care & Appointment System
- Doctor discovery, calendar integration, and automated reminders via Twilio/Email APIs  
- Location-based suggestions using OpenStreetMap API  

### 4. Community Forum and Health Knowledge Hub
- MERN stack-based real-time discussion platform using WebSockets  
- Moderation AI, JWT/OAuth authentication, and Headless CMS integration  

---

## Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend & Orchestration** | Django |
| **AI/NLP** | LLMs (Flan-T5, GPT-based models), RAG, NER |
| **APIs** | PubMed API, ClinicalTrial API, OpenStreetMap, Twilio |
| **Voice Interface** | Whisper (Speech-to-Text), gTTS (Text-to-Speech) |
| **Database & Auth** | MongoDB, JWT/OAuth |
| **Deployment** | Scalable, cloud-ready microservices architecture |

---

## Business & Market Impact

- **Reach:** Multilingual and voice access for rural and underserved users  
- **Efficiency:** Reduces doctor workload by up to 40%  
- **Cost:** Fewer prescription errors and readmissions  
- **Revenue Models:** B2B SaaS for hospitals, telehealth APIs, premium patient subscriptions  
- **Scalability:** Cloud-ready with modular plug-and-play AI agents  

---

## Future Scope

- Clinical validation with certified doctors  
- Federated learning for privacy-preserving AI  
- Blockchain-secured health records  
- Integration with IoT devices for real-time vitals tracking  
- Pharmacist-side prescription verification  
- Personalized reports and notifications  
- Global multilingual expansion (EN, HI, ES, FR, AR, CN)

---

## Technical Feasibility

- Modular architecture ensures fast development and scalability  
- Open-source stack minimizes licensing costs  
- Optimized for low-resource environments with lightweight models  
- Estimated efficiency improvement: 30–40% doctor time saved  

---

## Demo & Resources

- **Presentation:** [Google Drive Link](https://drive.google.com/file/d/1ErjW8dKSEyfuRIpyxoX7GZq4toV7ccxm/view?usp=sharing) 
- **Demo Video:** [Google Drive Link](https://drive.google.com/drive/folders/1DCCRpgup1vA02kW73rD7ECO_YMgC50lU?usp=drive_link)

---


