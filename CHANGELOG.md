# Change Log

## v3.0.0

### Breaking Changes

- On the record editor for Object records:
  - The published related link field group (`publishedRelatedLinkGroupList`) has been added. These fields are defined in cspace-ui version 10.0.0, but not in prior versions. To use this version of cspace-ui-plugin-profile-herbarium with an older version of cspace-ui, this field group should be hidden; otherwise, any values entered will not be saved.
  - The object count field group (`objectCountGroupList`) has been removed from the photo template.

## v2.0.0

### Breaking Changes

- v2.0.0 requires cspace-ui version 6. On the record editor form for Object records, the annotation field group (`annotationGroupList`) has been added. These fields are defined in cspace-ui version 6.0.0, but not in prior versions. To use this version of cspace-ui-plugin-profile-herbarium with an older version of cspace-ui, this field group should be hidden; otherwise, any values entered will not be saved.

## v1.1.0

- Added the Named Collection field to the Object record editor form (only if using cspace-ui version 5).

## v1.0.0

Initial release of the herbarium profile. Requires cspace-ui 4.
