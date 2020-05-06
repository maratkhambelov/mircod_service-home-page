import React, {useEffect, useState} from 'react';
import StyledSwiper from "../Swiper/Swiper";
import ChosenOptions from "../ChosenOptions/ChosenOptions";
import LiveView from "../LiveView/LiveView";
import './ConstructorPage.scss';
import Steps from "../Steps/Steps";
import StyledButton from "../Button/Button";
import Distance from "../Distance/Distance";
import TypesConnection from "../TypesConnection/TypesConnection";
import Navigation from "../Navigation/Navigation";

const ConstructorPage = ()=> {

    const [items, setItems] = useState([
        {id: 1, active: false, name: 'Water temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M14.05 12.715h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.737H14.05V8.29zm0-1.476h2.182v.738H14.05v-.738zm-.727 5.901v3.143c1.298.464 2.182 1.712 2.182 3.127 0 1.83-1.469 3.32-3.273 3.32s-3.272-1.49-3.272-3.32c0-1.415.883-2.663 2.181-3.127v-3.143h2.182zm-3.636 6.27c0 1.424 1.142 2.582 2.545 2.582 1.404 0 2.545-1.158 2.545-2.582 0-1.176-.784-2.203-1.909-2.497l-.272-.071v-2.964h-.728v2.964l-.272.071c-1.124.294-1.909 1.321-1.909 2.497zm4.363-15.49c0-1.017-.815-1.844-1.818-1.844-1.002 0-1.818.827-1.818 1.844v11.874l-.181.107c-1.267.744-2.033 2.126-2 3.605.048 2.102 1.771 3.878 3.842 3.958 1.102.046 2.14-.358 2.931-1.13.79-.772 1.226-1.811 1.226-2.924 0-1.44-.767-2.784-2-3.509l-.182-.107v-1.178h.727v.759c1.351.878 2.182 2.405 2.182 4.035 0 1.315-.515 2.543-1.449 3.455-.89.868-2.047 1.34-3.276 1.34l-.187-.003c-2.448-.096-4.485-2.194-4.541-4.68-.038-1.676.793-3.246 2.181-4.148V3.495c0-1.424 1.142-2.582 2.545-2.582 1.404 0 2.545 1.158 2.545 2.582v2.582h-.727V3.495zM8.887 6.593l-.582.443-.982-1.328H5.589l.867 1.523 1.625.198-.087.733-1.083-.133.363.639-.629.369-.364-.639-.428 1.018-.669-.29.642-1.526-.866-1.523L4.093 7.6l.642 1.526-.669.29-.428-1.018-.364.639-.629-.369.363-.639-1.083.133-.086-.733 1.624-.198.867-1.523H2.596l-.982 1.328-.582-.443.655-.885H.96V4.97h.727l-.655-.885.582-.442.982 1.327H4.33l-.867-1.523-1.624-.198.086-.733 1.083.133-.363-.639.629-.369.364.639.428-1.018.669.29-.642 1.527.867 1.522.866-1.522-.642-1.527.669-.29.428 1.018.364-.639.629.369-.363.639 1.083-.133.087.733-1.625.198-.867 1.523h1.734l.982-1.327.582.442-.655.885h.728v.738h-.728l.655.885z'}},
        {id: 2, active: false, name: 'Cloud temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d:'M15.689 13.747h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm-2.046-4.81c.677 0 1.227.539 1.227 1.202v13.439c1.46.505 2.455 1.86 2.455 3.399 0 1.082-.489 2.097-1.342 2.785-.664.537-1.492.821-2.346.821-.243 0-.487-.022-.731-.069-1.464-.28-2.623-1.438-2.885-2.88-.323-1.784.695-3.474 2.395-4.057V3.725c0-.663.55-1.202 1.227-1.202zM10.826 21.08c.203 1.119 1.101 2.017 2.236 2.234.862.164 1.737-.049 2.4-.584.664-.536 1.045-1.326 1.045-2.167 0-1.279-.884-2.395-2.148-2.714l-.307-.078V3.725c0-.221-.183-.401-.409-.401-.226 0-.409.18-.409.401v14.046l-.307.078c-1.464.37-2.367 1.759-2.101 3.231zm4.863-17.355c0-1.105-.918-2.004-2.046-2.004-1.128 0-2.045.899-2.045 2.004v12.907l-.204.116c-1.425.809-2.287 2.31-2.249 3.918.053 2.285 1.992 4.216 4.321 4.303 1.239.05 2.408-.39 3.298-1.229.889-.839 1.379-1.968 1.379-3.177 0-1.565-.862-3.027-2.25-3.815l-.204-.116v-1.281h.818v.825c1.52.955 2.454 2.615 2.454 4.387 0 1.429-.579 2.763-1.63 3.755-1.001.943-2.302 1.457-3.686 1.457-.069 0-.139-.002-.21-.005-2.753-.103-5.045-2.384-5.109-5.086-.043-1.822.893-3.529 2.454-4.508V3.725c0-1.547 1.284-2.806 2.863-2.806s2.864 1.259 2.864 2.806v2.806h-.818V3.725zM8.734 4.928h1.227v.802H8.734v-.802zm-1.247-2.15l.867-.851.579.567-.868.851-.578-.567zM5.052.919h.819v1.203h-.819V.919zM1.99 2.494l.579-.567.867.85-.578.567-.868-.85zm.199 3.236H.962v-.802h1.227v.802zm1.248 2.15l-.868.851-.579-.567.868-.851.579.567zm2.434 1.859h-.819V8.536h.819v1.203zm-2.864-4.41c0-1.327 1.101-2.406 2.454-2.406 1.354 0 2.455 1.079 2.455 2.406 0 1.326-1.101 2.405-2.455 2.405-1.353 0-2.454-1.079-2.454-2.405zm4.091 0c0-.885-.734-1.604-1.637-1.604-.902 0-1.636.719-1.636 1.604 0 .884.734 1.603 1.636 1.603.903 0 1.637-.719 1.637-1.603zm1.835 2.835l-.579.567-.867-.851.578-.567.868.851z'}},
        {id: 3, active: false, name: 'Temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d:'M23.44 20.754c.337.335.523.78.522 1.254 0 .474-.185.919-.522 1.254-.347.346-.804.519-1.261.519-.457 0-.914-.173-1.262-.519l-2.211-2.2c-.12-.118-.315-.118-.435 0-.412.411-1.131.411-1.543 0l-1.597-1.588c-.018-.013-.039-.021-.055-.037-.016-.016-.024-.036-.037-.054l-2.215-2.204c-.018-.013-.039-.021-.056-.037-.016-.016-.024-.036-.036-.055l-2.545-2.53c-.018-.013-.039-.021-.056-.037-.016-.017-.024-.037-.037-.056l-2.544-2.53c-.018-.013-.039-.02-.056-.037-.016-.016-.024-.037-.036-.055l-2.544-2.53c-.019-.013-.04-.02-.057-.037-.016-.017-.024-.038-.037-.056L1.556 5.972c-.38-.377-.589-.879-.589-1.413s.209-1.036.589-1.414l1.658-1.649c.783-.78 2.059-.779 2.842 0l15.173 15.091c.425.422.425 1.111 0 1.534-.058.058-.09.135-.09.216 0 .082.032.159.09.217l2.211 2.2zm-1.968 1.957c.39.388 1.024.387 1.414 0 .189-.187.293-.437.293-.703 0-.266-.104-.516-.293-.704l-1.09-1.083-1.399 1.392c-.005.005-.012.007-.018.011l1.093 1.087zm-.797-5.141c.119-.119.119-.313 0-.432l-1.366-1.359-.712.708c-.076.076-.177.114-.277.114-.1 0-.201-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.708-1.754-1.744-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.072-.712.708c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.071-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.709L9.09 5.616l-.712.707c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.707-3.034-3.018c-.478-.475-1.256-.475-1.734 0L2.11 3.696c-.231.231-.359.537-.359.863 0 .326.128.632.359.862l3.033 3.017.703-.699c.152-.152.4-.152.554 0 .153.153.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.152.401-.152.554 0 .153.152.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.699 2.083 2.071.703-.698c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.698 1.754 1.744.702-.698c.154-.153.401-.153.554 0 .154.152.154.398 0 .551l-.702.698 1.366 1.359c.117.116.319.116.435 0 .213-.211.492-.317.772-.317.279 0 .558.106.771.317l.571.568c.005-.005.007-.012.012-.017l1.399-1.392-.567-.565c-.206-.205-.32-.478-.32-.768 0-.289.114-.562.32-.767zm-3.185.174c-.1 0-.2-.038-.277-.114L3.369 3.86c-.153-.152-.153-.399 0-.551.153-.152.401-.152.554 0l13.844 13.769c.153.153.153.399 0 .552-.076.076-.176.114-.277.114z'}},
        {id: 4, active: false, name: 'Cloud temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d:'M15.689 13.747h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm-2.046-4.81c.677 0 1.227.539 1.227 1.202v13.439c1.46.505 2.455 1.86 2.455 3.399 0 1.082-.489 2.097-1.342 2.785-.664.537-1.492.821-2.346.821-.243 0-.487-.022-.731-.069-1.464-.28-2.623-1.438-2.885-2.88-.323-1.784.695-3.474 2.395-4.057V3.725c0-.663.55-1.202 1.227-1.202zM10.826 21.08c.203 1.119 1.101 2.017 2.236 2.234.862.164 1.737-.049 2.4-.584.664-.536 1.045-1.326 1.045-2.167 0-1.279-.884-2.395-2.148-2.714l-.307-.078V3.725c0-.221-.183-.401-.409-.401-.226 0-.409.18-.409.401v14.046l-.307.078c-1.464.37-2.367 1.759-2.101 3.231zm4.863-17.355c0-1.105-.918-2.004-2.046-2.004-1.128 0-2.045.899-2.045 2.004v12.907l-.204.116c-1.425.809-2.287 2.31-2.249 3.918.053 2.285 1.992 4.216 4.321 4.303 1.239.05 2.408-.39 3.298-1.229.889-.839 1.379-1.968 1.379-3.177 0-1.565-.862-3.027-2.25-3.815l-.204-.116v-1.281h.818v.825c1.52.955 2.454 2.615 2.454 4.387 0 1.429-.579 2.763-1.63 3.755-1.001.943-2.302 1.457-3.686 1.457-.069 0-.139-.002-.21-.005-2.753-.103-5.045-2.384-5.109-5.086-.043-1.822.893-3.529 2.454-4.508V3.725c0-1.547 1.284-2.806 2.863-2.806s2.864 1.259 2.864 2.806v2.806h-.818V3.725zM8.734 4.928h1.227v.802H8.734v-.802zm-1.247-2.15l.867-.851.579.567-.868.851-.578-.567zM5.052.919h.819v1.203h-.819V.919zM1.99 2.494l.579-.567.867.85-.578.567-.868-.85zm.199 3.236H.962v-.802h1.227v.802zm1.248 2.15l-.868.851-.579-.567.868-.851.579.567zm2.434 1.859h-.819V8.536h.819v1.203zm-2.864-4.41c0-1.327 1.101-2.406 2.454-2.406 1.354 0 2.455 1.079 2.455 2.406 0 1.326-1.101 2.405-2.455 2.405-1.353 0-2.454-1.079-2.454-2.405zm4.091 0c0-.885-.734-1.604-1.637-1.604-.902 0-1.636.719-1.636 1.604 0 .884.734 1.603 1.636 1.603.903 0 1.637-.719 1.637-1.603zm1.835 2.835l-.579.567-.867-.851.578-.567.868.851z'}},
        {id: 5, active: false, name: 'Water temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M14.05 12.715h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.737H14.05V8.29zm0-1.476h2.182v.738H14.05v-.738zm-.727 5.901v3.143c1.298.464 2.182 1.712 2.182 3.127 0 1.83-1.469 3.32-3.273 3.32s-3.272-1.49-3.272-3.32c0-1.415.883-2.663 2.181-3.127v-3.143h2.182zm-3.636 6.27c0 1.424 1.142 2.582 2.545 2.582 1.404 0 2.545-1.158 2.545-2.582 0-1.176-.784-2.203-1.909-2.497l-.272-.071v-2.964h-.728v2.964l-.272.071c-1.124.294-1.909 1.321-1.909 2.497zm4.363-15.49c0-1.017-.815-1.844-1.818-1.844-1.002 0-1.818.827-1.818 1.844v11.874l-.181.107c-1.267.744-2.033 2.126-2 3.605.048 2.102 1.771 3.878 3.842 3.958 1.102.046 2.14-.358 2.931-1.13.79-.772 1.226-1.811 1.226-2.924 0-1.44-.767-2.784-2-3.509l-.182-.107v-1.178h.727v.759c1.351.878 2.182 2.405 2.182 4.035 0 1.315-.515 2.543-1.449 3.455-.89.868-2.047 1.34-3.276 1.34l-.187-.003c-2.448-.096-4.485-2.194-4.541-4.68-.038-1.676.793-3.246 2.181-4.148V3.495c0-1.424 1.142-2.582 2.545-2.582 1.404 0 2.545 1.158 2.545 2.582v2.582h-.727V3.495zM8.887 6.593l-.582.443-.982-1.328H5.589l.867 1.523 1.625.198-.087.733-1.083-.133.363.639-.629.369-.364-.639-.428 1.018-.669-.29.642-1.526-.866-1.523L4.093 7.6l.642 1.526-.669.29-.428-1.018-.364.639-.629-.369.363-.639-1.083.133-.086-.733 1.624-.198.867-1.523H2.596l-.982 1.328-.582-.443.655-.885H.96V4.97h.727l-.655-.885.582-.442.982 1.327H4.33l-.867-1.523-1.624-.198.086-.733 1.083.133-.363-.639.629-.369.364.639.428-1.018.669.29-.642 1.527.867 1.522.866-1.522-.642-1.527.669-.29.428 1.018.364-.639.629.369-.363.639 1.083-.133.087.733-1.625.198-.867 1.523h1.734l.982-1.327.582.442-.655.885h.728v.738h-.728l.655.885z'}},
        {id: 6, active: false, name: 'Temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M23.44 20.754c.337.335.523.78.522 1.254 0 .474-.185.919-.522 1.254-.347.346-.804.519-1.261.519-.457 0-.914-.173-1.262-.519l-2.211-2.2c-.12-.118-.315-.118-.435 0-.412.411-1.131.411-1.543 0l-1.597-1.588c-.018-.013-.039-.021-.055-.037-.016-.016-.024-.036-.037-.054l-2.215-2.204c-.018-.013-.039-.021-.056-.037-.016-.016-.024-.036-.036-.055l-2.545-2.53c-.018-.013-.039-.021-.056-.037-.016-.017-.024-.037-.037-.056l-2.544-2.53c-.018-.013-.039-.02-.056-.037-.016-.016-.024-.037-.036-.055l-2.544-2.53c-.019-.013-.04-.02-.057-.037-.016-.017-.024-.038-.037-.056L1.556 5.972c-.38-.377-.589-.879-.589-1.413s.209-1.036.589-1.414l1.658-1.649c.783-.78 2.059-.779 2.842 0l15.173 15.091c.425.422.425 1.111 0 1.534-.058.058-.09.135-.09.216 0 .082.032.159.09.217l2.211 2.2zm-1.968 1.957c.39.388 1.024.387 1.414 0 .189-.187.293-.437.293-.703 0-.266-.104-.516-.293-.704l-1.09-1.083-1.399 1.392c-.005.005-.012.007-.018.011l1.093 1.087zm-.797-5.141c.119-.119.119-.313 0-.432l-1.366-1.359-.712.708c-.076.076-.177.114-.277.114-.1 0-.201-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.708-1.754-1.744-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.072-.712.708c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.071-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.709L9.09 5.616l-.712.707c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.707-3.034-3.018c-.478-.475-1.256-.475-1.734 0L2.11 3.696c-.231.231-.359.537-.359.863 0 .326.128.632.359.862l3.033 3.017.703-.699c.152-.152.4-.152.554 0 .153.153.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.152.401-.152.554 0 .153.152.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.699 2.083 2.071.703-.698c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.698 1.754 1.744.702-.698c.154-.153.401-.153.554 0 .154.152.154.398 0 .551l-.702.698 1.366 1.359c.117.116.319.116.435 0 .213-.211.492-.317.772-.317.279 0 .558.106.771.317l.571.568c.005-.005.007-.012.012-.017l1.399-1.392-.567-.565c-.206-.205-.32-.478-.32-.768 0-.289.114-.562.32-.767zm-3.185.174c-.1 0-.2-.038-.277-.114L3.369 3.86c-.153-.152-.153-.399 0-.551.153-.152.401-.152.554 0l13.844 13.769c.153.153.153.399 0 .552-.076.076-.176.114-.277.114z'}},
        {id: 7, active: false, name: 'Water temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M14.05 12.715h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.737H14.05V8.29zm0-1.476h2.182v.738H14.05v-.738zm-.727 5.901v3.143c1.298.464 2.182 1.712 2.182 3.127 0 1.83-1.469 3.32-3.273 3.32s-3.272-1.49-3.272-3.32c0-1.415.883-2.663 2.181-3.127v-3.143h2.182zm-3.636 6.27c0 1.424 1.142 2.582 2.545 2.582 1.404 0 2.545-1.158 2.545-2.582 0-1.176-.784-2.203-1.909-2.497l-.272-.071v-2.964h-.728v2.964l-.272.071c-1.124.294-1.909 1.321-1.909 2.497zm4.363-15.49c0-1.017-.815-1.844-1.818-1.844-1.002 0-1.818.827-1.818 1.844v11.874l-.181.107c-1.267.744-2.033 2.126-2 3.605.048 2.102 1.771 3.878 3.842 3.958 1.102.046 2.14-.358 2.931-1.13.79-.772 1.226-1.811 1.226-2.924 0-1.44-.767-2.784-2-3.509l-.182-.107v-1.178h.727v.759c1.351.878 2.182 2.405 2.182 4.035 0 1.315-.515 2.543-1.449 3.455-.89.868-2.047 1.34-3.276 1.34l-.187-.003c-2.448-.096-4.485-2.194-4.541-4.68-.038-1.676.793-3.246 2.181-4.148V3.495c0-1.424 1.142-2.582 2.545-2.582 1.404 0 2.545 1.158 2.545 2.582v2.582h-.727V3.495zM8.887 6.593l-.582.443-.982-1.328H5.589l.867 1.523 1.625.198-.087.733-1.083-.133.363.639-.629.369-.364-.639-.428 1.018-.669-.29.642-1.526-.866-1.523L4.093 7.6l.642 1.526-.669.29-.428-1.018-.364.639-.629-.369.363-.639-1.083.133-.086-.733 1.624-.198.867-1.523H2.596l-.982 1.328-.582-.443.655-.885H.96V4.97h.727l-.655-.885.582-.442.982 1.327H4.33l-.867-1.523-1.624-.198.086-.733 1.083.133-.363-.639.629-.369.364.639.428-1.018.669.29-.642 1.527.867 1.522.866-1.522-.642-1.527.669-.29.428 1.018.364-.639.629.369-.363.639 1.083-.133.087.733-1.625.198-.867 1.523h1.734l.982-1.327.582.442-.655.885h.728v.738h-.728l.655.885z'}},
        {id: 8, active: false, name: 'Cloud temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M15.689 13.747h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm-2.046-4.81c.677 0 1.227.539 1.227 1.202v13.439c1.46.505 2.455 1.86 2.455 3.399 0 1.082-.489 2.097-1.342 2.785-.664.537-1.492.821-2.346.821-.243 0-.487-.022-.731-.069-1.464-.28-2.623-1.438-2.885-2.88-.323-1.784.695-3.474 2.395-4.057V3.725c0-.663.55-1.202 1.227-1.202zM10.826 21.08c.203 1.119 1.101 2.017 2.236 2.234.862.164 1.737-.049 2.4-.584.664-.536 1.045-1.326 1.045-2.167 0-1.279-.884-2.395-2.148-2.714l-.307-.078V3.725c0-.221-.183-.401-.409-.401-.226 0-.409.18-.409.401v14.046l-.307.078c-1.464.37-2.367 1.759-2.101 3.231zm4.863-17.355c0-1.105-.918-2.004-2.046-2.004-1.128 0-2.045.899-2.045 2.004v12.907l-.204.116c-1.425.809-2.287 2.31-2.249 3.918.053 2.285 1.992 4.216 4.321 4.303 1.239.05 2.408-.39 3.298-1.229.889-.839 1.379-1.968 1.379-3.177 0-1.565-.862-3.027-2.25-3.815l-.204-.116v-1.281h.818v.825c1.52.955 2.454 2.615 2.454 4.387 0 1.429-.579 2.763-1.63 3.755-1.001.943-2.302 1.457-3.686 1.457-.069 0-.139-.002-.21-.005-2.753-.103-5.045-2.384-5.109-5.086-.043-1.822.893-3.529 2.454-4.508V3.725c0-1.547 1.284-2.806 2.863-2.806s2.864 1.259 2.864 2.806v2.806h-.818V3.725zM8.734 4.928h1.227v.802H8.734v-.802zm-1.247-2.15l.867-.851.579.567-.868.851-.578-.567zM5.052.919h.819v1.203h-.819V.919zM1.99 2.494l.579-.567.867.85-.578.567-.868-.85zm.199 3.236H.962v-.802h1.227v.802zm1.248 2.15l-.868.851-.579-.567.868-.851.579.567zm2.434 1.859h-.819V8.536h.819v1.203zm-2.864-4.41c0-1.327 1.101-2.406 2.454-2.406 1.354 0 2.455 1.079 2.455 2.406 0 1.326-1.101 2.405-2.455 2.405-1.353 0-2.454-1.079-2.454-2.405zm4.091 0c0-.885-.734-1.604-1.637-1.604-.902 0-1.636.719-1.636 1.604 0 .884.734 1.603 1.636 1.603.903 0 1.637-.719 1.637-1.603zm1.835 2.835l-.579.567-.867-.851.578-.567.868.851z'}},
        {id: 9, active: false, name: 'Temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M23.44 20.754c.337.335.523.78.522 1.254 0 .474-.185.919-.522 1.254-.347.346-.804.519-1.261.519-.457 0-.914-.173-1.262-.519l-2.211-2.2c-.12-.118-.315-.118-.435 0-.412.411-1.131.411-1.543 0l-1.597-1.588c-.018-.013-.039-.021-.055-.037-.016-.016-.024-.036-.037-.054l-2.215-2.204c-.018-.013-.039-.021-.056-.037-.016-.016-.024-.036-.036-.055l-2.545-2.53c-.018-.013-.039-.021-.056-.037-.016-.017-.024-.037-.037-.056l-2.544-2.53c-.018-.013-.039-.02-.056-.037-.016-.016-.024-.037-.036-.055l-2.544-2.53c-.019-.013-.04-.02-.057-.037-.016-.017-.024-.038-.037-.056L1.556 5.972c-.38-.377-.589-.879-.589-1.413s.209-1.036.589-1.414l1.658-1.649c.783-.78 2.059-.779 2.842 0l15.173 15.091c.425.422.425 1.111 0 1.534-.058.058-.09.135-.09.216 0 .082.032.159.09.217l2.211 2.2zm-1.968 1.957c.39.388 1.024.387 1.414 0 .189-.187.293-.437.293-.703 0-.266-.104-.516-.293-.704l-1.09-1.083-1.399 1.392c-.005.005-.012.007-.018.011l1.093 1.087zm-.797-5.141c.119-.119.119-.313 0-.432l-1.366-1.359-.712.708c-.076.076-.177.114-.277.114-.1 0-.201-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.708-1.754-1.744-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.072-.712.708c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.071-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.709L9.09 5.616l-.712.707c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.707-3.034-3.018c-.478-.475-1.256-.475-1.734 0L2.11 3.696c-.231.231-.359.537-.359.863 0 .326.128.632.359.862l3.033 3.017.703-.699c.152-.152.4-.152.554 0 .153.153.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.152.401-.152.554 0 .153.152.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.699 2.083 2.071.703-.698c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.698 1.754 1.744.702-.698c.154-.153.401-.153.554 0 .154.152.154.398 0 .551l-.702.698 1.366 1.359c.117.116.319.116.435 0 .213-.211.492-.317.772-.317.279 0 .558.106.771.317l.571.568c.005-.005.007-.012.012-.017l1.399-1.392-.567-.565c-.206-.205-.32-.478-.32-.768 0-.289.114-.562.32-.767zm-3.185.174c-.1 0-.2-.038-.277-.114L3.369 3.86c-.153-.152-.153-.399 0-.551.153-.152.401-.152.554 0l13.844 13.769c.153.153.153.399 0 .552-.076.076-.176.114-.277.114z'}},
        {id: 10, active: false, name: 'Cloud temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M15.689 13.747h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm-2.046-4.81c.677 0 1.227.539 1.227 1.202v13.439c1.46.505 2.455 1.86 2.455 3.399 0 1.082-.489 2.097-1.342 2.785-.664.537-1.492.821-2.346.821-.243 0-.487-.022-.731-.069-1.464-.28-2.623-1.438-2.885-2.88-.323-1.784.695-3.474 2.395-4.057V3.725c0-.663.55-1.202 1.227-1.202zM10.826 21.08c.203 1.119 1.101 2.017 2.236 2.234.862.164 1.737-.049 2.4-.584.664-.536 1.045-1.326 1.045-2.167 0-1.279-.884-2.395-2.148-2.714l-.307-.078V3.725c0-.221-.183-.401-.409-.401-.226 0-.409.18-.409.401v14.046l-.307.078c-1.464.37-2.367 1.759-2.101 3.231zm4.863-17.355c0-1.105-.918-2.004-2.046-2.004-1.128 0-2.045.899-2.045 2.004v12.907l-.204.116c-1.425.809-2.287 2.31-2.249 3.918.053 2.285 1.992 4.216 4.321 4.303 1.239.05 2.408-.39 3.298-1.229.889-.839 1.379-1.968 1.379-3.177 0-1.565-.862-3.027-2.25-3.815l-.204-.116v-1.281h.818v.825c1.52.955 2.454 2.615 2.454 4.387 0 1.429-.579 2.763-1.63 3.755-1.001.943-2.302 1.457-3.686 1.457-.069 0-.139-.002-.21-.005-2.753-.103-5.045-2.384-5.109-5.086-.043-1.822.893-3.529 2.454-4.508V3.725c0-1.547 1.284-2.806 2.863-2.806s2.864 1.259 2.864 2.806v2.806h-.818V3.725zM8.734 4.928h1.227v.802H8.734v-.802zm-1.247-2.15l.867-.851.579.567-.868.851-.578-.567zM5.052.919h.819v1.203h-.819V.919zM1.99 2.494l.579-.567.867.85-.578.567-.868-.85zm.199 3.236H.962v-.802h1.227v.802zm1.248 2.15l-.868.851-.579-.567.868-.851.579.567zm2.434 1.859h-.819V8.536h.819v1.203zm-2.864-4.41c0-1.327 1.101-2.406 2.454-2.406 1.354 0 2.455 1.079 2.455 2.406 0 1.326-1.101 2.405-2.455 2.405-1.353 0-2.454-1.079-2.454-2.405zm4.091 0c0-.885-.734-1.604-1.637-1.604-.902 0-1.636.719-1.636 1.604 0 .884.734 1.603 1.636 1.603.903 0 1.637-.719 1.637-1.603zm1.835 2.835l-.579.567-.867-.851.578-.567.868.851z'}},
        {id: 11, active: false, name: 'Water temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M14.05 12.715h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.737H14.05V8.29zm0-1.476h2.182v.738H14.05v-.738zm-.727 5.901v3.143c1.298.464 2.182 1.712 2.182 3.127 0 1.83-1.469 3.32-3.273 3.32s-3.272-1.49-3.272-3.32c0-1.415.883-2.663 2.181-3.127v-3.143h2.182zm-3.636 6.27c0 1.424 1.142 2.582 2.545 2.582 1.404 0 2.545-1.158 2.545-2.582 0-1.176-.784-2.203-1.909-2.497l-.272-.071v-2.964h-.728v2.964l-.272.071c-1.124.294-1.909 1.321-1.909 2.497zm4.363-15.49c0-1.017-.815-1.844-1.818-1.844-1.002 0-1.818.827-1.818 1.844v11.874l-.181.107c-1.267.744-2.033 2.126-2 3.605.048 2.102 1.771 3.878 3.842 3.958 1.102.046 2.14-.358 2.931-1.13.79-.772 1.226-1.811 1.226-2.924 0-1.44-.767-2.784-2-3.509l-.182-.107v-1.178h.727v.759c1.351.878 2.182 2.405 2.182 4.035 0 1.315-.515 2.543-1.449 3.455-.89.868-2.047 1.34-3.276 1.34l-.187-.003c-2.448-.096-4.485-2.194-4.541-4.68-.038-1.676.793-3.246 2.181-4.148V3.495c0-1.424 1.142-2.582 2.545-2.582 1.404 0 2.545 1.158 2.545 2.582v2.582h-.727V3.495zM8.887 6.593l-.582.443-.982-1.328H5.589l.867 1.523 1.625.198-.087.733-1.083-.133.363.639-.629.369-.364-.639-.428 1.018-.669-.29.642-1.526-.866-1.523L4.093 7.6l.642 1.526-.669.29-.428-1.018-.364.639-.629-.369.363-.639-1.083.133-.086-.733 1.624-.198.867-1.523H2.596l-.982 1.328-.582-.443.655-.885H.96V4.97h.727l-.655-.885.582-.442.982 1.327H4.33l-.867-1.523-1.624-.198.086-.733 1.083.133-.363-.639.629-.369.364.639.428-1.018.669.29-.642 1.527.867 1.522.866-1.522-.642-1.527.669-.29.428 1.018.364-.639.629.369-.363.639 1.083-.133.087.733-1.625.198-.867 1.523h1.734l.982-1.327.582.442-.655.885h.728v.738h-.728l.655.885z'}},
        {id: 12, active: false, name: 'Temperature', icon: {fill: '#00000', viewBox:"0 0 26 26", height:"26", width:"26", d: 'M23.44 20.754c.337.335.523.78.522 1.254 0 .474-.185.919-.522 1.254-.347.346-.804.519-1.261.519-.457 0-.914-.173-1.262-.519l-2.211-2.2c-.12-.118-.315-.118-.435 0-.412.411-1.131.411-1.543 0l-1.597-1.588c-.018-.013-.039-.021-.055-.037-.016-.016-.024-.036-.037-.054l-2.215-2.204c-.018-.013-.039-.021-.056-.037-.016-.016-.024-.036-.036-.055l-2.545-2.53c-.018-.013-.039-.021-.056-.037-.016-.017-.024-.037-.037-.056l-2.544-2.53c-.018-.013-.039-.02-.056-.037-.016-.016-.024-.037-.036-.055l-2.544-2.53c-.019-.013-.04-.02-.057-.037-.016-.017-.024-.038-.037-.056L1.556 5.972c-.38-.377-.589-.879-.589-1.413s.209-1.036.589-1.414l1.658-1.649c.783-.78 2.059-.779 2.842 0l15.173 15.091c.425.422.425 1.111 0 1.534-.058.058-.09.135-.09.216 0 .082.032.159.09.217l2.211 2.2zm-1.968 1.957c.39.388 1.024.387 1.414 0 .189-.187.293-.437.293-.703 0-.266-.104-.516-.293-.704l-1.09-1.083-1.399 1.392c-.005.005-.012.007-.018.011l1.093 1.087zm-.797-5.141c.119-.119.119-.313 0-.432l-1.366-1.359-.712.708c-.076.076-.177.114-.277.114-.1 0-.201-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.708-1.754-1.744-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.072-.712.708c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.708-2.083-2.071-.712.708c-.076.076-.176.114-.277.114-.1 0-.2-.038-.277-.114-.153-.153-.153-.399 0-.551l.712-.709L9.09 5.616l-.712.707c-.076.076-.176.115-.277.115-.1 0-.2-.039-.277-.115-.153-.152-.153-.398 0-.551l.712-.707-3.034-3.018c-.478-.475-1.256-.475-1.734 0L2.11 3.696c-.231.231-.359.537-.359.863 0 .326.128.632.359.862l3.033 3.017.703-.699c.152-.152.4-.152.554 0 .153.153.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.152.401-.152.554 0 .153.152.153.399 0 .551l-.703.699 2.083 2.072.703-.699c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.699 2.083 2.071.703-.698c.153-.153.401-.153.554 0 .153.152.153.398 0 .551l-.703.698 1.754 1.744.702-.698c.154-.153.401-.153.554 0 .154.152.154.398 0 .551l-.702.698 1.366 1.359c.117.116.319.116.435 0 .213-.211.492-.317.772-.317.279 0 .558.106.771.317l.571.568c.005-.005.007-.012.012-.017l1.399-1.392-.567-.565c-.206-.205-.32-.478-.32-.768 0-.289.114-.562.32-.767zm-3.185.174c-.1 0-.2-.038-.277-.114L3.369 3.86c-.153-.152-.153-.399 0-.551.153-.152.401-.152.554 0l13.844 13.769c.153.153.153.399 0 .552-.076.076-.176.114-.277.114z'}},
    ]);

    const [steps, setSteps] = useState([
        {id:1, status: 'completed', show:false },
        {id:2, status: 'completed', show: false},
        {id:3, status: 'current', show: true},
        {id: 4, status:'uncompleted', show: false},
    ])
    const [idxCurrentStep, setIdxCurrentStep] = useState(
        steps.indexOf(steps.find(step =>  step.status === "current" ))
    );
    const [idxShowStep, setIdxShowStep] = useState(
        steps.indexOf(steps.find(item => item.show === true))
    );
    const [hasNext, setHasNext] = useState(
        idxCurrentStep !== steps.length-1
    );
    const [hasPrev, setHasPrev] = useState(
        idxCurrentStep !== 0
    );
    useEffect(()=>{
        setIdxShowStep(steps.indexOf(steps.find(item => item.show === true)))
    }, [steps])

    const handleShowStep = (id) => {
        setSteps(steps.map(item => {
            if(item.show === true) {
                item.show = false;
            }
            return item
        }));
        setSteps(steps.map(item=>{
            if(item.id === id) {
                item.show = true
            }
            return item;
        }));
    };

    const handleLimitsSteps = ()=>{
        const idxShowStep = steps.indexOf(steps.find(item => item.show === true));
        if(idxShowStep === steps.length-1) {
            setHasNext(false);
        }
        if(idxShowStep === 0) {
            setHasPrev(false);
        }
    }

    const toNavigateNext = () => {
        const idShowStep = steps.find(item => item.show === true).id;
        const idxShowStep = steps.indexOf(steps.find(item => item.show === true));

        if(idxShowStep !== steps.length-1) {
            handleShowStep(idShowStep+1);
            handleLimitsSteps();
            setHasPrev(true);
        }
    }
    const toNavigateBack = () => {
        const idShowStep = steps.find(item => item.show === true).id;
        const idxShowStep = steps.indexOf(steps.find(item => item.show === true));
        if(idxShowStep !== 0 ){
            handleShowStep(idShowStep-1);
            handleLimitsSteps();
            setHasNext(true);
        }
    }

    const completeStep = () => {
        if(idxCurrentStep !== steps.length -1) {
            const uncompletedStep = steps.find(step => step.status === 'uncompleted');
            if(uncompletedStep !== undefined) {
                setSteps(steps.map(step=> {
                    if(step.status === 'current') {
                        step.status = 'completed'
                    }
                    if(step.id === uncompletedStep.id) {
                        step.status = 'current'
                    }
                    return step;
                }));
            }
            const currentStep = (steps.find(step =>  step.status === "current" ));
            const idCurrenStep = currentStep.id;
            const idxCurrentStep = steps.indexOf(currentStep);
            setIdxCurrentStep(idxCurrentStep);
            if(idxCurrentStep !== steps.length-1) {

                handleShowStep(idCurrenStep);
                handleLimitsSteps();
                setHasPrev(true);
            }
            else{
                handleShowStep(idCurrenStep);
                handleLimitsSteps();
                setHasPrev(true);
            }
        }
    }

    const chooseItem = (id) => {
        setItems(items.map(item => {
                if(item.id === id){
                    item.active = !item.active
                }
                return item;
            })
        )
    }

    return (
        <div className="constructor">
            <div className="constructor_inner">
                <div className="constructor_swiper">
                    <StyledSwiper data={items} chooseItem={chooseItem}/>
                </div>
                <div className="constructor_main">
                    <div className="constructor_product">
                        <div className="constructor_product_inner">
                            <ChosenOptions data={items} />
                            <LiveView  hideProduct={hasNext}/>
                        </div>
                    </div>
                    <div className="constructor_params">
                        <div className="constructor_params_inner">
                            <Steps idxCurrentStep={idxCurrentStep} steps={steps}/>
                            <Distance/>
                            <TypesConnection/>
                            <div className="constructor_nextstep">
                                <StyledButton label="NEXT STEP" color="primary" onHandle={completeStep}/>
                            </div>
                        </div>
                        {(idxShowStep < 2) && (
                            <div className="constructor_counter">Current shown Step: {idxShowStep + 1}</div>
                        )}
                    </div>
                    <Navigation toNavigateBack={toNavigateBack}  toNavigateNext={toNavigateNext}  hasNext={hasNext} hasPrev={hasPrev} steps={steps}/>
                </div>
            </div>

        </div>
    );
}

export default ConstructorPage;
