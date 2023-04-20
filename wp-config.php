<?php
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/customers/c/8/0/mariyahmahmood.dk/httpd.www/tu/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'mariyahmahmood_dktu' );

/** Database username */
define( 'DB_USER', 'mariyahmahmood_dktu' );

/** Database password */
define( 'DB_PASSWORD', 'BDF78tjv' );

/** Database hostname */
define( 'DB_HOST', 'mariyahmahmood.dk.mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'j4uQy;|U/5[ttV1InQ3xx-5NKe&n#>JRP]%<AF_WmX~@O|l`/F`Xe6<#giLC~.ms' );
define( 'SECURE_AUTH_KEY',  'S.V04d:c{=LlA^P~2ir%cN_`Kl-&x-NF7tM*:aLge~o{K6xB#/V,_8$CO;A&zoSp' );
define( 'LOGGED_IN_KEY',    '6[=E=g)hLg^$t5[ljC`O!MPYcgv[VnQJ7#<sh]Hj-9OVT1><Ag3&j0 ^zKphxhj&' );
define( 'NONCE_KEY',        '52nBQ4$<}P3&NU)6;Wan/=6jr|Di(~@-8Rc.YU)cRNN2k+Og SbWwB;$nh&fGm.-' );
define( 'AUTH_SALT',        '8{!cm|]SNXy-0<$-#5c~iM!f&FV@J3nb2-TB0Nk*!J1)f>K&00gR(rnsAT;?*T b' );
define( 'SECURE_AUTH_SALT', '$BFP#$oA@C~(g>G<5VkOKJa*.VCi1Y3bw0`QEVu_n]}D|%-f]L:.7M`7AiJ&j}Db' );
define( 'LOGGED_IN_SALT',   'y_;Gg}kIcP}r9w||au/LCi6SegjSXZl#+]58ThS!<F>+%~Y2-ax-58k0;3Ykl3eX' );
define( 'NONCE_SALT',       '-;^Xm$LVn]WGc[g;NCbx]T(ia:I}lx?;hq->tcJoU8MvS;,]Z(>t3@k2^RGlGBse' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'tu';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
