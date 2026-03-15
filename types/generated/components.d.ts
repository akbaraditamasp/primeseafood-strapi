import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralBasicMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_general_basic_media_cards';
  info: {
    displayName: 'basic_media_card';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralBasicSection extends Struct.ComponentSchema {
  collectionName: 'components_general_basic_sections';
  info: {
    displayName: 'basic_section';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralBasicTitle extends Struct.ComponentSchema {
  collectionName: 'components_general_basic_titles';
  info: {
    displayName: 'basic_title';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralDetailMediaList extends Struct.ComponentSchema {
  collectionName: 'components_general_detail_media_lists';
  info: {
    displayName: 'detail_media_list';
    icon: 'picture';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'general.media', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralDetailedListSection extends Struct.ComponentSchema {
  collectionName: 'components_general_detailed_list_sections';
  info: {
    displayName: 'detailed_list_section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    person: Schema.Attribute.Component<'general.detailed-media-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralDetailedMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_general_detailed_media_cards';
  info: {
    displayName: 'detailed_media_card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_general_features_sections';
  info: {
    displayName: 'features_section';
    icon: 'hashtag';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'general.icon-list', true>;
    media: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    mini_tag: Schema.Attribute.Component<'general.tag', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_general_footer_links';
  info: {
    displayName: 'footer_link';
    icon: 'link';
  };
  attributes: {
    links: Schema.Attribute.Component<'general.nav-links', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralFormLabel extends Struct.ComponentSchema {
  collectionName: 'components_general_form_labels';
  info: {
    displayName: 'form_label';
    icon: 'italic';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralIconList extends Struct.ComponentSchema {
  collectionName: 'components_general_icon_lists';
  info: {
    displayName: 'icon_list';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralMedia extends Struct.ComponentSchema {
  collectionName: 'components_general_media';
  info: {
    displayName: 'media';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralMediaListSection extends Struct.ComponentSchema {
  collectionName: 'components_general_media_list_sections';
  info: {
    displayName: 'media_list_section';
    icon: 'picture';
  };
  attributes: {
    list: Schema.Attribute.Component<'general.media', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_general_nav_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_general_service_sections';
  info: {
    displayName: 'service_section';
    icon: 'bulletList';
  };
  attributes: {
    cards: Schema.Attribute.Component<'general.basic-media-card', true> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralShortListingSection extends Struct.ComponentSchema {
  collectionName: 'components_general_short_listing_sections';
  info: {
    displayName: 'short_listing_section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'general.icon-list', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralSimpleHero extends Struct.ComponentSchema {
  collectionName: 'components_general_simple_heroes';
  info: {
    displayName: 'simple_hero';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralSocials extends Struct.ComponentSchema {
  collectionName: 'components_general_socials';
  info: {
    displayName: 'icon_link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralTag extends Struct.ComponentSchema {
  collectionName: 'components_general_tags';
  info: {
    displayName: 'tag';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.basic-media-card': GeneralBasicMediaCard;
      'general.basic-section': GeneralBasicSection;
      'general.basic-title': GeneralBasicTitle;
      'general.detail-media-list': GeneralDetailMediaList;
      'general.detailed-list-section': GeneralDetailedListSection;
      'general.detailed-media-card': GeneralDetailedMediaCard;
      'general.features-section': GeneralFeaturesSection;
      'general.footer-links': GeneralFooterLinks;
      'general.form-label': GeneralFormLabel;
      'general.icon-list': GeneralIconList;
      'general.media': GeneralMedia;
      'general.media-list-section': GeneralMediaListSection;
      'general.nav-links': GeneralNavLinks;
      'general.service-section': GeneralServiceSection;
      'general.short-listing-section': GeneralShortListingSection;
      'general.simple-hero': GeneralSimpleHero;
      'general.socials': GeneralSocials;
      'general.tag': GeneralTag;
    }
  }
}
