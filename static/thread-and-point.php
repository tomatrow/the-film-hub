<?php
/**
 * Plugin Name: T&P Landing Page
 */

//Load template from specific page
add_filter( 'page_template', 'tap_page_template' );
function tap_page_template( $page_template ){

    if ( get_page_template_slug() == 'filmer-landing.php' ) {
        $page_template = dirname( __FILE__ ) . '/filmvista/index.html';
    }
    if ( get_page_template_slug() == 'vendor-landing.php' ) {
        $page_template = dirname( __FILE__ ) . '/vendvista/index.html';
    }

    return $page_template;
}

/**
 * Add "Custom" template to page attribute template section.
 */
add_filter( 'theme_page_templates', 'tap_add_template_to_select', 10, 4 );
function tap_add_template_to_select( $post_templates, $wp_theme, $post, $post_type ) {

    // Add custom template named template-custom.php to select dropdown 
    $post_templates['filmer-landing.php'] = __('Thread & Point Filmer Landing');
    $post_templates['vendor-landing.php'] = __('Thread & Point Vendor Landing');

    return $post_templates;
}