---
title: Update to the PMHC MDS - 1/11/2024 (v2.14.2)
---

#### PMHC MDS Update v2.14.2 ####

We are pleased to announce that PMHC MDS Update v2.14.2 was released on 
November 1, 2024.

As per the Department of Health and Aged Care’s October 2024 PHN CEO 
Circular, the PMHC MDS has been updated to support the capture of data 
at a more granular level in cases where a provider organisation operates 
out of multiple sites within the same PHN. 

The following features have been implemented in the data entry interface:
* A new ‘Sites’ tab is available in the data entry interface for Provider 
  Organisations. This tab allows sites for the provider organisation to be
  defined.
* Where sites have been defined for a Provider Organisation, a drop down 
  list containing each of the sites is now displayed on the Service Contact 
  tab. 
* The Service Contact Modality field now includes “SMS”. Please refer to the
  notes at [https://docs.pmhc-mds.com/projects/data-specification/en/latest/data-model-and-specifications.html#modality](https://docs.pmhc-mds.com/projects/data-specification/en/latest/data-model-and-specifications.html#modality){:target="_blank"}
  for advice on how this response may be used.

The following features have been applied in the upload interface:
* The upload interface now accepts uploads in the Version 4.1 data 
  specification. This specification allows the capture of a provider
  organisation operating at multiple sites within the same PHN.
  Please see below for more information on this specification. The existing 
  Version 4.0 data specification will continue to be available until 1 May 2025. 
  After that date it will no longer be available.
* The upload interface also accepts the Version 4.0.5 data specification. This 
  specification allows for the capture of “SMS” in the Service Contact 
  Modality field. The new Version 4.1 data specification also includes this
  update.

The following update has been made to the PMHC MDS user interface:
* Idle session detection has been improved. Interacting with screen elements, 
  for example by typing or clicking, will extend user session timeouts.

##### PMHC MDS Data Specification Version 4.1 #####

The PMHC MDS Data Specification update v4.1 was released on November 1 2024. 
The following updates were implemented:
* Sites - Added sites field to the Organisation record to allow the sites at 
  which a provider organisation provides services to clients to be specified
* Service Contact Site - Added site field to the Service Contact record to 
  allow the site at which a Service Contact took place to be specified
* Modality - Added response ‘5: SMS’

##### PMHC MDS Data Specification Update Version 4.0.5 #####

The PMHC MDS Data Specification update v4.0.5 was released on November 1 2024. 
The following updates were implemented:
* Modality - Added response ‘5: SMS’

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.