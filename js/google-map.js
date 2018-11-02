;( function( $, window, document, undefined )
    {
        $( '.google-map' ).lazyLoadGoogleMaps(
        {
            key: 'AIzaSyBLZ5RzBQnOpjfK6wz78Z53SelZSdtSXYA',
            signed_in: false,
            callback: function( container, map )
            {
                var $container  = $( container ),
                    center      = new google.maps.LatLng( $container.attr( 'data-lat' ), $container.attr( 'data-lng' ) );
 
                var content = '<div class="infowindow">Rybnicka 43,<br> 44-295 Lyski</div>';
                var infowindow = new google.maps.InfoWindow({
                      content: content,
                      maxWidth: 200,
                  });
                var styles = [
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": "0"
                            },
                            {
                                "lightness": "100"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": "-12"
                            },
                            {
                                "saturation": "-91"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": "0"
                            },
                            {
                                "lightness": "6"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": "27"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#eceaea"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#808080"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#5b0202"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "weight": "5.98"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#cccccc"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "weight": "4.00"
                            },
                            {
                                "saturation": "1"
                            },
                            {
                                "gamma": "1.00"
                            },
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "weight": "2.84"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": "23"
                            }
                        ]
                    }
                ];

                map.setOptions(
                    { 
                      zoom: 15, 
                      center: center,
                      mapTypeId: google.maps.MapTypeId.ROADMAP,
                      styles: styles,
                    }
                );
                const marker = new google.maps.Marker(
                    { 
                      position: center, 
                      map: map,
                      icon: {
                          url: '../img/location-pin.png',
                      }
                    }
                );
              
                infowindow.open(map, marker);  
            }
        });
 
    })( jQuery, window, document );
