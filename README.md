# neptunesoftware-dxp-abb-materialsmanagement
Materials Management

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
  - [Neptune DXP SAP Edition Prerequisites](#neptune-dxp-sap-edition-prerequisites)
  - [Neptune DXP SAP Edition Prerequisites](#neptune-dxp-open-edition-prerequisites)
  - [Neptune DXP Version Compatibility](#neptune-dxp-version-compatibility)
    - [Neptune DXP SAP Edition Version](#neptune-dxp-sap-edition-version)
    - [Neptune DXP Open Edition Version](#neptune-dxp-open-edition-version)
  - [Recommended Naming Conventions & Namespaces](#recommended-naming-conventions--namespaces)
- [Neptune DXP SAP Edition Setup](#neptune-dxp-sap-edition-setup)
  - [Step 1. Copying & Pasting the ABAP code included in the app repository](#neptune-dxp-sap-edition-setup)
  - [Step 2. Access the Neptune cockpit & using the API Factory](#neptune-dxp-sap-edition-setup)
- [Neptune DXP Open Edition Setup](#neptune-dxp-open-edition-setup)
  - [Step 3. Connecting the included API in Open Edition to the newly created API Factory API in SAP Edition](#step-3-connecting-the-included-api-in-open-edition-to-the-newly-created-api-factory-api-in-sap-edition)

## Overview
This bundle showcases a Materials Management (MM) integration scenario between Neptune DXP Open Edition and Neptune DXP SAP Edition using API Factory. It serves as a reference implementation for exposing ABAP-based business logic in an SAP backend system and consuming it from an application running on Open Edition through a standardized API interface.

The bundle also includes three source files containing the ABAP implementations required to define the custom Z interfaces and the corresponding data provider class in the SAP backend.

These custom Z interfaces and the data provider class are required to enable data retrieval from the SAP system and to expose the data via the Neptune DXP SAP Edition _**'API Factory tool'**_, allowing it to be consumed and rendered in the Open Edition application.

## Prerequisites
Before implementing this integration scenario, ensure that the following prerequisites are met.

### Neptune DXP SAP Edition Prerequisites:
- The SAP user must have the required SAP authorizations to create and activate custom ABAP artifacts, including interfaces (_**'ZIF'**_) and data provider classes (_**'ZCL'**_), using the transaction _**'SE24'**_.
- The SAP user must be authorized to read and write data in the SAP backend system through _Function Modules_ and _BAPIs_ that are consumed by the custom ABAP logic.
- The SAP user access to the [Neptune DXP SAP Edition Cockpit](https://docs.neptune-software.com/neptune-sap-edition/24/getting-started-guide/open-cockpit.html) via **_'/n/NEPTUNE/COCKPIT'_** is required, including user access [policy](https://docs.neptune-software.com/neptune-sap-edition/24/cockpit-overview/policy.html#_policy_tab) **_(if policies are required in the SAP Edition)_** to use relevant tools such as the [API Factory](https://docs.neptune-software.com/neptune-sap-edition/24/cockpit-overview/api-factory.html#_abap_artifacts_with_automated_api) for exposing ABAP classes as APIs.

### Neptune DXP Open Edition Prerequisites:
- In Neptune DXP Open Edition, the user must have [role](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/security-role.html) based access to create and maintain artifacts, including _'APIs'_ via the [API Designer](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/api-designer.html) and _applications_ via the [App Designer](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/app-designer.html).
- The user must have [role](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/security-role.html) based access to create and maintain [Proxy Authentication](https://docs.neptune-software.com/neptune-dxp-open-edition/24/cockpit-overview/security-proxy-auth.html) artifacts that need to be added to an API in Neptune DXP Open Edition.

## Neptune DXP Version Compatibility
While the Neptune DXP - SAP Edition and Open Edition cater to different user environments and have unique requirements, leveraging this bundle with an end-to-end solution across both versions in mind, requires understanding their compatibility.

Users can import the Materials Management bundle into DXP versions earlier than DXP 24; however, these versions are _**NOT**_ supported for maintenance or ongoing updates if any issues occur with the bundle artifacts.

### Neptune DXP SAP Edition Version
Recommended Version: _**Neptune DXP - SAP Edition 24.10.0000**_
Released: Q4/2024

### Neptune DXP Open Edition Version
Recommended Version: _**Neptune DXP - Open Edition 24.10.0**_
Released: Q4/2023

## Recommended Naming Conventions & Namespaces
To ensure a streamlined and consistent import process for the provided source files that implement the exposure of ABAP-based business logic in the SAP backend system, it is recommended to retain the naming conventions and namespaces as defined in the delivered artifacts.

The delivered implementation consists of three ABAP source files: two interface definitions — _**ZIF_NAD_MM_PR_CREATE_TMP_GET**_ and _**ZIF_NAD_MM_PR_CREATE_TMP_POST**_ — and one data provider class, _**ZCL_NAD_MM_PR_CREATE_TMP**_, which serves as the central integration component.

## Neptune DXP SAP Edition Setup
The setup guide for the required files to be imported and used in Neptune DXP SAP Edition provides a step-by-step procedure for correctly importing the delivered custom Z interfaces and the associated data provider class into the SAP backend system.

**_NOTE_**: To simplify the import procedure and ensure consistency throughout this guide, the names of the custom artifacts and the data provider class should be kept identical to those defined in the provided files. _**For example**_, the data provider class referenced in this guide is named **_'ZCL_NAD_MM_PR_CREATE_TMP'_** and should be kept the same when importing to the SAP backend system.

### Step 1. Copying & Pasting the ABAP code included in the app repository

Begin by copying the ABAP source code for each custom ZIF interface into the SAP Class Builder using the SAP TCode _**'SE24'**_.

Subsequently, copy the ABAP source code for the custom ZCL data provider class into the SAP TCode _**'SE24'**_ and activate the class. Upon successful import, the data provider class should appear as shown below: 
<img width="1776" height="1316" alt="image" src="https://github.com/user-attachments/assets/115c945b-0768-45cc-acd2-94ffe5c31e2c" />


### Step 2. Access the Neptune cockpit & using the API Factory

After successfully importing and activating the ABAP **_ZIF_** interfaces (**_'ZIF_NAD_MM_PR_CREATE_TMP_GET'_** & **_'ZIF_NAD_MM_PR_CREATE_TMP_POST'_**) and the corresponding **_'ZCL'_** data provider class (**_'ZCL_NAD_MM_PR_CREATE_TMP'_**), open the Neptune DXP SAP Edition Cockpit using transaction **_'/n/NEPTUNE/COCKPIT' _** in a new SAP GUI window.

From the Neptune DXP SAP Edition Cockpit, navigate to the **_API Factory tool_** and select the newly created ABAP data provider class. The generated API name will correspond directly to the name of the ABAP class (**_'ZCL_NAD_MM_PR_CREATE_TMP'_**) defined in the SAP backend system.
<img width="1765" height="529" alt="image" src="https://github.com/user-attachments/assets/320d447f-6a27-4554-80ff-c9fa2caac275" />


Navigate to the Policy tab and set the _Unrestricted API Engine_ option to **'Yes'** to allow unrestricted access to the API.
If access control is required, define a custom policy by selecting **'Add'**, assign the appropriate users or roles, and set _Unrestricted API Engine_ to **'No'**. 
<img width="1006" height="602" alt="image" src="https://github.com/user-attachments/assets/4ba16006-88d1-465b-ab43-414269e33afc" /> 

Once the policy configuration is complete, the API can be validated and tested using the _**'Swagger UI'**_ tab prior to being consumed by applications running on Neptune DXP Open Edition.
<img width="1815" height="1142" alt="image" src="https://github.com/user-attachments/assets/83297896-e82c-4cff-ad6e-51ff9a8fed5c" />

<img width="1754" height="1076" alt="image" src="https://github.com/user-attachments/assets/52915d91-f937-40fb-b567-b80bc9cfc847" />

## Neptune DXP Open Edition Setup

### Step 3. Connecting the included API in Open Edition to the newly created API Factory API in SAP Edition 

In Neptune DXP Open Edition, the downloaded Marketplace bundle includes a preconfigured API definition. All operations, schemas, and mappings are already defined and **_DO NOT_** require modification. The only required change is to update the API _endpoint URL_ from
"_https://Your_SAP_Edition_URL.neptune-software.com/neptune/api/dynamic/zcl_nad_mm_pr_create_tmp_"
to the actual endpoint exposed by the API Factory in your Neptune DXP SAP Edition system.
<img width="1779" height="1166" alt="image" src="https://github.com/user-attachments/assets/45e3f798-97fa-4afe-af0e-38a7c80f76cc" /> 

The generated API endpoint can be retrieved from the _API Factory tool_ in Neptune DXP SAP Edition under the _Swagger UI_ tab. Either of the provided service URLs may be used as the base endpoint for the API configuration in Neptune DXP Open Edition.
<img width="1678" height="625" alt="image" src="https://github.com/user-attachments/assets/1e290261-3c69-43ca-bd3c-b22766e94907" /> 

In the _**'API Designer'**_ tool of Neptune DXP Open Edition, replace the existing endpoint with the newly retrieved SAP Edition API Factory URL and save the configuration.
<img width="3671" height="666" alt="image" src="https://github.com/user-attachments/assets/a3239213-139f-452a-ba7d-78a8b2799c39" />

As a final step, verify that the _Enable Proxy_ and _Use in App Designer_ options remain enabled (these are selected by default). Since the API is consumed externally from SAP to Neptune DXP Open Edition, **'proxy-based authentication'** must be configured.

<img width="620" height="339" alt="image" src="https://github.com/user-attachments/assets/1c0e21aa-b8c2-4a8c-a9e2-2036ff534b83" />


To secure the API, assign a _**'Proxy Authentication'**_ configuration based on an existing SAP user. Additional authentication mechanisms can be created and managed using the _Proxy Authentication_ tool, if required.
<img width="1816" height="581" alt="image" src="https://github.com/user-attachments/assets/a3f948ac-6ef0-46af-921d-d3a226e73438" />

Now the API is ready to be consumed and the app can retrieve the data from SAP in Neptune DXP Open Edition. 
