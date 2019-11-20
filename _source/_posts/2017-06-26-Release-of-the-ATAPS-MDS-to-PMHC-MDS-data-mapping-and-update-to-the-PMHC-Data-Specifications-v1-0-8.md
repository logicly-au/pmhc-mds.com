---
title: Release of the ATAPS MDS to PMHC MDS data mapping and update to the PMHC Data Specifications
---

#### Release of the ATAPS MDS to PMHC MDS data mapping

We are pleased to announce that the ATAPS MDS to PMHC MDS data mapping was released on June 26, 2017 and is now available at [https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html](https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html).

PHNs who are implementing new client systems and mapping the ATAPS data to PMHC data need to ensure that their data mapping conforms with this mapping specification.

*Please note: we are still in the process of investigating the mapping of ATAPS diagnoses fields to PMHC Principal Diagnosis and Additional Diagnosis fields where multiple ATAPS diagnosis fields have been selected. In order to allow PHNs to access this mapping in a timely manner we are releasing it without having finished this investigation. Further announcements will be made when this investigation is complete.*

#### PMHC MDS Data Specifications Update v1.0.8

We are also pleased to announce that PMHC MDS Data Specifications Update v1.0.8 was released on June 26, 2017.

The following data items have been updated:

* Data model and specifications

  * Record formats

    * Episode

      * Updated [Episode - Principal Diagnosis](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-principal-diagnosis) to add the following response codes:

        * 100: Anxiety disorders (ATAPS)
        * 200: Affective (Mood) disorders (ATAPS)
        * 300: Substance use disorders (ATAPS)
        * 400: Psychotic disorders (ATAPS)

      * Updated [Episode - Additional Diagnosis](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-additional-diagnosis) to add the following response code:

        * 000: No additional diagnosis
        * 100: Anxiety disorders (ATAPS)
        * 200: Affective (Mood) disorders (ATAPS)
        * 300: Substance use disorders (ATAPS)
        * 400: Psychotic disorders (ATAPS)

    * Service Contact

      * Updated [Service Contact - Type](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-type) to add the following response code:

        * 98: ATAPS
