const DEFAULT_DOMAIN = 'portfolio-mkinana.web.app';

if (location.hostname != DEFAULT_DOMAIN) {
    location.assign(`https://${DEFAULT_DOMAIN}${location.pathname}`);
};