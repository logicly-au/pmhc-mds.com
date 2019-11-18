---
title: Update to the PMHC MDS - 26/5/2017
---

PMHC MDS Update v0.10.0 was released on May 26, 2017.

The following enhancements have been implemented:

* Client search has been redesigned.
* Filters added to table of client search results.
* Search now allowed by date of birth only. Results can then be filtered by gender.
* Improved formatting upload errors and success messages.
* Added validation for [ATSI cultural training](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#practitioner-atsi-cultural-training). Validation to [Practitioner - Aboriginal and Torres Strait Islander Status](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#practitioner-aboriginal-and-torres-strait-islander-status) and [Provider Organisation - Type](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#provider-organisation-type) is now occurring when response code ‘3 - Not Required’ is submitted.

The following upload errors have now been fixed:

* Uploads with zero length files are now reported correctly.
* Better error reporting for records that do not satisfy cross-table validation constraints.

PMHC MDS website update on May 26, 2017.

The PMHC MDS Service Provider Quick Reference Guide was added to the PMHC MDS website:

The PMHC MDS Service Provider QUICK REFERENCE Guide is a resource intended to describe key issues and concepts related to the collection of, and provision of data to, the PMHC MDS for mental health service providers. For more detailed information regarding the PMHC MDS, see the [PMHC MDS Data Specifications](https://docs.pmhc-mds.com/data-specification/).

There are two versions of the PMHC MDS Service Provider Quick Reference Guide. If you are a service provider, it is recommended that you use the [PDF version](https://www.pmhc-mds.com/doc/service-provider-quick-reference-guide-20170516.pdf) produced by the Department of Health. If you are a Primary Health Network, you can use the [word version](https://www.pmhc-mds.com/doc/service-provider-quick-reference-guide-template-20170516.docx) to tailor some of the information to your local context.
