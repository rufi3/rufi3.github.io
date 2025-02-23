'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2f871befda9eb5d7c87890bd40eea237",
"assets/AssetManifest.bin.json": "38c6a4ed57f351f7acbfacba1635eea6",
"assets/AssetManifest.json": "8c8dd84cf217a83c7a4e1b16212e40fa",
"assets/assets/audio/harmonika.mp3": "328064e181299f6c8f13c4a06bd5253a",
"assets/assets/audio/lira.mp3": "5a94808aa3fee86109e520862ccebdda",
"assets/assets/audio/pan.mp3": "ccf53479ab60ceb1dc749500e515ba28",
"assets/assets/audio/piano.mp3": "b82ed0d14ce880e81a33e1c3065a4262",
"assets/assets/audio/record_scratch.mp3": "8f5cfb56ab427b1083b13f9c83a39d96",
"assets/assets/audio/tamburin.mp3": "4c38bfaee6875ec4cd2970ac1b40499c",
"assets/assets/audio/vrisak.mp3": "0a5427e5047cd428ac44a4a620e365fe",
"assets/assets/audio/zagreb_fals.mp3": "0bb0cd24f50d11da867a93addb0ef1f7",
"assets/assets/audio/zagreb_instrumental.mp3": "ed00014e341e0740b24e4a6c9ecaf52e",
"assets/assets/audio/zagreb_stim.mp3": "fd7d6209da62cac9fd46eb1492aef6e9",
"assets/assets/fonts/AutourOne-Regular.ttf": "de1b19d9df2763ef7e7ebdd0f4769c5d",
"assets/assets/fonts/BreeSerif-Regular.ttf": "737426f47c43b8ba6e12b2bfa1dc8c41",
"assets/assets/fonts/Caprasimo-Regular.ttf": "54cc2fb9aeecccedde96c183678cbdd8",
"assets/assets/fonts/CATChilds.ttf": "3bf2ff02137f7947dcf2e3e966264af5",
"assets/assets/fonts/IMFellFrenchCanonSC-Regular.ttf": "e59665c8404e11a9bd58322fd83c2955",
"assets/assets/fonts/MyFlutterApp.ttf": "fe161ffc2eb9da0e2fd648122d65dabb",
"assets/assets/fonts/NotoSerif-Bold.ttf": "eb8a8ba64d03bf76bc188d2e22ff9211",
"assets/assets/fonts/NotoSerif-Italic.ttf": "858b3c0567bb168f142d8efd9601946e",
"assets/assets/fonts/NotoSerif-Light.ttf": "3159cd8092cd8cfc8fb895a7fc1a9308",
"assets/assets/fonts/NotoSerif-Regular.ttf": "811988e53e8c4aba75a5d2ce60bb362b",
"assets/assets/fonts/Slabo27px-Regular.ttf": "41d8ce2e89c0d256a190ef10ca2247bb",
"assets/assets/images/1_a.png": "15cb9f3801c5c0a49fdf0a06b4bf2cc0",
"assets/assets/images/1_b.png": "a46f32415481c14d03a414dc05c29f7f",
"assets/assets/images/1_c.png": "40c82b1e10b5605863d18643f1faf726",
"assets/assets/images/1_d.png": "35b2ce99daa8e3a3b7f49857bb2ab23c",
"assets/assets/images/2_a.png": "587c11cd80cad5f466525af8c7e57b07",
"assets/assets/images/2_d.png": "70a7cfd36f1ef660a490bbaa77168e8d",
"assets/assets/images/3_a.png": "ba02f0406f824787fe6f3600221c01b4",
"assets/assets/images/3_b.png": "28bac6fee262d44a398af6282ceccdf0",
"assets/assets/images/3_c.png": "acc04d91516a78de4f466455ae83088e",
"assets/assets/images/3_d.png": "69065db2a7ea4b51b2628d219095efb1",
"assets/assets/images/4_a.png": "8585b11c4d3dcb72d5a387c13530b7f3",
"assets/assets/images/4_b.png": "5ffad9782fbd82a0c92e822436117769",
"assets/assets/images/4_c.png": "dcb7d23d7a66f9f8f50af2553069b615",
"assets/assets/images/4_d.png": "d124f58dec43bc0eea7632b4a2f78697",
"assets/assets/images/auto.png": "c515f5c2f2712e9c7139b6362295987b",
"assets/assets/images/background_elsa.jpg": "ce00dcc2bf7a36596a2c695525fa8f74",
"assets/assets/images/background_gunduliceva.jpg": "dff38d34c5c9fee85498aaa3b3e4756d",
"assets/assets/images/background_harmica.jpg": "b244efdaeb41df6b9d3246f8c0526668",
"assets/assets/images/background_hnk.jpg": "c86215d56fe0af0c215fc67a0b414a12",
"assets/assets/images/background_kallina.jpg": "6288fd3f5569074d153691a2a915dc41",
"assets/assets/images/background_maketa.jpg": "6e09ca957e8dc5e0781ad0d106d1501f",
"assets/assets/images/background_newspapers.jpg": "3068569acc679e5971a0d8776ac18fcc",
"assets/assets/images/background_oktogon.jpg": "b5e1fff9220e1218c9e84fd3f6a13366",
"assets/assets/images/background_paviljon.jpg": "19ac75e71e211af74eb2004721dfd174",
"assets/assets/images/background_praska.jpg": "39d446b4c2f53c721521839f6a7cf83e",
"assets/assets/images/background_stup.jpg": "3913cc5c8fa22b55126ba0864853b881",
"assets/assets/images/background_turul.jpg": "78c018ae45cea8a4d0e065272e589c6b",
"assets/assets/images/balon.png": "834d2bb041561f550730aee409b65116",
"assets/assets/images/bastl.gif": "b8ab56e51f6ade02d5a5380285022ba9",
"assets/assets/images/boca.png": "7f2a71d0140f6a04761c389779c93052",
"assets/assets/images/budicki.gif": "415cc0b6f9a16c3680dafa4ffafe7754",
"assets/assets/images/cabaret.png": "9b2a8cdbb65c051039b39c9e86637122",
"assets/assets/images/characters_bastl.gif": "fd91d676a7ca8aeb6ab23eb748a394b2",
"assets/assets/images/characters_budicki.gif": "4f44fe2a1e546e9ee700f69245df35d0",
"assets/assets/images/characters_feller.gif": "c9eea0b32d7f3df25ae0b137116c5692",
"assets/assets/images/characters_penkala.gif": "d0aeb45ec01722b978920e866f9bffe8",
"assets/assets/images/characters_polak.gif": "0c22b39643973660b20cfd7c16603082",
"assets/assets/images/characters_zagorka.gif": "d476610c927b17f9b7b7fe3c83b12942",
"assets/assets/images/cup.png": "8b37b8707bdf2d098f2244ffb14ec55c",
"assets/assets/images/dalida.gif": "d6a18ab266262884f9d5a5bc47b199ac",
"assets/assets/images/feller.gif": "c5185fa99d8e108ccb30a0872182b198",
"assets/assets/images/filetirani_crveni.png": "14f3e4b7300a3f23f20d1ba34fd19a5e",
"assets/assets/images/filetirani_zeleni.png": "b9e3096d6ee7d16ab269df4cb8d02798",
"assets/assets/images/gramofon.png": "eeb3b51f55da57e26a932aa11ace8d3e",
"assets/assets/images/harmica.gif": "43845091a048eb4eee86c166194e7113",
"assets/assets/images/harmica_1.png": "026430f7525daf4915a2eea975d5b895",
"assets/assets/images/harmica_2.png": "45096eb1b9ee92344fe78580ade793ac",
"assets/assets/images/harmica_3.png": "d6c10881fdf747fa2c4f80a44b74c794",
"assets/assets/images/hnk_A.png": "d528b87c3babddbd83b5f1e2243348b6",
"assets/assets/images/hnk_D.png": "6e3e5ee7cfcf6bad1e2b347639fc7bfa",
"assets/assets/images/hnk_E.png": "92c8cfc225cca2a0b24d8af33b48bf68",
"assets/assets/images/hnk_I.png": "06b580aa856d24b0c67adf7caf6f2949",
"assets/assets/images/hnk_L.png": "1122b97e3620a86763fef83db6240ddf",
"assets/assets/images/hnk_N.png": "9f0029c945b9ac66bef4f3dbdd30be77",
"assets/assets/images/irma.gif": "7eb2f4e29dad3ca0f00ff55c815c2090",
"assets/assets/images/kazaliste.png": "44cec812b1c3487c882d092790ec700d",
"assets/assets/images/kisa.png": "8a060398cc7fed29354a736c434d92a9",
"assets/assets/images/krug_crveni.png": "ce2e2395d170eb941ca6c374b6014f6b",
"assets/assets/images/krug_zeleni.png": "f7f96c4d0b26678820a44035fa0474fb",
"assets/assets/images/kvadrat_crveni.png": "692bcb02499e58d3580982d728226a0e",
"assets/assets/images/kvadrat_zeleni.png": "c4ab2416b9b25238338b14ede69967ea",
"assets/assets/images/lampa_1.png": "1a5d850ef1b9b59b6cee049732c7f144",
"assets/assets/images/lampa_1_on.png": "1b7dbe095904fd654c99ffd2f54ca616",
"assets/assets/images/lampa_2.png": "50d8b993600a68b1d2c83a7b76f20a79",
"assets/assets/images/lampa_2_on.png": "fd1f22d9e14cdb2f134c29859a381d79",
"assets/assets/images/lampa_3.png": "f57efbfd0e089be85cb097fcb2e272bc",
"assets/assets/images/lampa_3_on.png": "4435e1020208f640fa686f608e37d2a4",
"assets/assets/images/lampa_5.png": "8ec4e62f75b772c1eddc22a6e146e80a",
"assets/assets/images/lampa_5_on.png": "46ec1dc34de8b5223de4a500084da7a1",
"assets/assets/images/lampa_prava.png": "af15fe1447a4646993ce86f979153626",
"assets/assets/images/lampa_prava_on.png": "a139c6f5e9ae7307d5b0e65ccef15a40",
"assets/assets/images/lanterna.png": "d51c860efb003a9633b3768a46556816",
"assets/assets/images/lisice.png": "f89d992fbed16902b0ca038e731cf776",
"assets/assets/images/logo.png": "3d32ac63eabbfe81f6b7d38730a2ad14",
"assets/assets/images/logo_zagreb.png": "aa510c557a6fd3eec20e20e9ca90ccae",
"assets/assets/images/maestro.png": "54566556961596cd9798e34eccbb9dd8",
"assets/assets/images/map.jpg": "7527da82629565d363c91c72901dfee7",
"assets/assets/images/map_big_budicki.png": "4afe86eaace2d2a382df93ccc0261a90",
"assets/assets/images/map_big_budicki_zeleni.png": "d5d8fbbfee98ab38839802d2d19654d1",
"assets/assets/images/map_big_harmica.png": "d9908f1cf2875ccc8a01e1e78631b42b",
"assets/assets/images/map_big_harmica_zeleni.png": "c92d4ebc82e9004c872a4679989a0055",
"assets/assets/images/map_big_hnk.png": "a394ea81b637e2cc9e218845484d85ca",
"assets/assets/images/map_big_hnk_zeleni.png": "68e94983cb870b0d893d338c874f2bdb",
"assets/assets/images/map_big_maketa.png": "98900452675aa8735436418513041540",
"assets/assets/images/map_big_maketa_zeleni.png": "f51a456ff374a7786be40d00b48783b2",
"assets/assets/images/map_big_mazuranac.png": "9bb2cd4b6ae762d44a18eb0cd039aff9",
"assets/assets/images/map_big_mazuranac_zeleni.png": "b94acd3d7b3e275f01357160fcda2cea",
"assets/assets/images/map_big_obzor.png": "780a9038a88d6bd32745add50d8c7934",
"assets/assets/images/map_big_obzor_zeleni.png": "6dde68f6e42a288f4aaa7a1d8c8af8e4",
"assets/assets/images/map_big_oktogon.png": "0baafe5b2861961f343c81b35ecca030",
"assets/assets/images/map_big_oktogon_zeleni.png": "33185fb082e1c8cb2a59b4ee52d2e91f",
"assets/assets/images/map_big_penkala.png": "e15f6da7da3eb6ff2ca5807bcbe34878",
"assets/assets/images/map_big_penkala_zeleni.png": "fc489b22dbde369b7ac71f4a1f51cd37",
"assets/assets/images/map_big_trg.png": "350d3a670d4b79a3ddbfad8271f24898",
"assets/assets/images/map_big_trg_zeleni.png": "851e573f6b9ca02af9a2ec08c149a11b",
"assets/assets/images/map_big_zrinjevac.png": "d317ecc3ef93f4b435e3e8388e93a8d8",
"assets/assets/images/map_big_zrinjevac_zeleni.png": "9ed5438b2562b6d43b940115a0b99c2e",
"assets/assets/images/map_budicki_obzor.png": "85edff36d884c94e7a89b42002884566",
"assets/assets/images/map_budicki_obzor_zeleni.png": "d97251648c68c23a8763d37d05508b95",
"assets/assets/images/map_harmica_oktogon.png": "7df61e979233996bac41ec93d6a5c41f",
"assets/assets/images/map_harmica_oktogon_zeleni.png": "5e89de17a78d47511288bcfe02036066",
"assets/assets/images/map_hnk_mazuranac.png": "c328c6bd375e7efaee88a17269089c9a",
"assets/assets/images/map_hnk_mazuranac_zeleni.png": "c9dfb050d709870df1699633c9bfe62f",
"assets/assets/images/map_maketa_harmica.png": "4f3967828c43bf64e109c517aa97b523",
"assets/assets/images/map_maketa_harmica_zeleni.png": "9ec3b1be00daee78035348107a361c56",
"assets/assets/images/map_meteo_radiona.png": "a1e45a80a83172720e0f114f53fb6194",
"assets/assets/images/map_meteo_radiona_zeleni.png": "20cd5eb7e2aeb8e046cd1fe4faa165d2",
"assets/assets/images/map_obzor_hnk.png": "5d0228b96190ea2a43ddbc5350b76480",
"assets/assets/images/map_obzor_hnk_zeleni.png": "b5ee3bf59dcbbd68a4396a9c07567f77",
"assets/assets/images/map_oktogon_budicki.png": "4ed62aac78cf576e6658e405b4d1e88d",
"assets/assets/images/map_oktogon_budicki_zeleni.png": "7346d5fd84e52a9dd72182bb95ace201",
"assets/assets/images/map_radiona_trg.png": "5975ce3ca7fe79d3c48ac96304f1cf27",
"assets/assets/images/map_radiona_trg_zeleni.png": "c189b57d0c2db314d6911384b997e6ff",
"assets/assets/images/map_trg_maketa.png": "f7fda01469d6e357bda3ea6f7528d613",
"assets/assets/images/map_trg_maketa_zeleni.png": "df39ddf68209bc254c5243184ac97900",
"assets/assets/images/map_upute.jpg": "08b9eb353e0384447272ec812c1378bc",
"assets/assets/images/map_zrinjevac_meteo.png": "d8350afd0d4effb84290e0ba4df19fef",
"assets/assets/images/map_zrinjevac_meteo_zeleni.png": "b2831572bb2da0fc26c4fc4da0b4ee15",
"assets/assets/images/mazuranac_logo.png": "8c5582c310c96e4730673f06c1ed94b9",
"assets/assets/images/model_1_a.png": "846c1412e040e64d6e93cd30a222f649",
"assets/assets/images/model_1_b.png": "9fde23685a723ad93defd41503bab906",
"assets/assets/images/model_1_c.png": "03790497544d38e79f3d20ee732224a7",
"assets/assets/images/model_1_d.png": "e92a7d077ee5a296c97ed0fc37ac9556",
"assets/assets/images/model_2_a.png": "6be1048e6d0150e3e61f3b6afd27db6c",
"assets/assets/images/model_2_d.png": "f1298dcf6526f94eb4150beb09743124",
"assets/assets/images/model_3_a.png": "ffc87332dc4bd274f52f9a267de17f39",
"assets/assets/images/model_3_b.png": "49cc1ced286e611c790971f67edcd1b0",
"assets/assets/images/model_3_c.png": "081a4fdc9215e840cc37504c67405949",
"assets/assets/images/model_3_d.png": "0f1b9aa185bde326a5023b4d5420e00c",
"assets/assets/images/model_4_a.png": "35345de72593b81d36a3731d4c58308d",
"assets/assets/images/model_4_b.png": "66e3e8c04ddfc654b3ac966928f836fd",
"assets/assets/images/model_4_c.png": "a4429483e2fe01b4344df774686e0091",
"assets/assets/images/model_4_d.png": "b991a1dd2ed75770b1bcb2d02098dc08",
"assets/assets/images/model_nonselected.png": "9d1f19c30561409183dc831c10630464",
"assets/assets/images/muzika.png": "c3a1d1d7688b3bbd19ffa2a34ffd7461",
"assets/assets/images/newspapers_astrology.png": "2bdb7a156f7649bc4577d664824dc0cc",
"assets/assets/images/newspapers_bottle.png": "7d063337f443403421b2ce13565a73bb",
"assets/assets/images/newspapers_budicki.png": "c75a6057438b1bd9b271f12bde3336b1",
"assets/assets/images/newspapers_cabaret.png": "64188f31963656f02604e18db761bb1e",
"assets/assets/images/newspapers_dalida.png": "a3a91fda4a2f9ed85bdfac17ad857c40",
"assets/assets/images/newspapers_elsa.png": "c7917aa9d508b60be1551bbafd55937b",
"assets/assets/images/newspapers_fun_1.png": "b96d2df9a31c7c84467afef5442b0999",
"assets/assets/images/newspapers_fun_2.png": "a48ac5f87cf336cec7272cb3b8ac2cd4",
"assets/assets/images/newspapers_fun_3.png": "813a08dcc3b7b600bf8ea964a51f1ded",
"assets/assets/images/newspapers_fun_4.png": "2bf58f2c73e1c63a4b21ccec104c3cd3",
"assets/assets/images/newspapers_hnk.png": "c655e8dcb27514b2ac2d0efb01f56701",
"assets/assets/images/newspapers_penkala.png": "2e2ee9261422e4bd6cf44bb075d4dc77",
"assets/assets/images/newspapers_turul.png": "1d1626e8df7a0a2ba534ea5f95c2f762",
"assets/assets/images/newspapers_valdec.png": "0ad305b76b30e01544c536f0c4ce3106",
"assets/assets/images/novine.png": "b7379b518172483282c895b7a0dab365",
"assets/assets/images/obzor.png": "6dff6f5893c3228abcb5fb68d42b4020",
"assets/assets/images/oktogon_crveni.png": "bfc24f088e99b337b139be083fadf498",
"assets/assets/images/oktogon_hint.png": "cd0219e8f4490c926dee54d0cef34721",
"assets/assets/images/oktogon_pod.png": "df8de29d95b594fc90c4c77db7d9b79c",
"assets/assets/images/oktogon_pod_original.png": "e6f9e0a9d4cab493fdbd26215d680af5",
"assets/assets/images/oktogon_simboli.png": "d59640140bbf6f9ba6f5e4d01f5f046a",
"assets/assets/images/oktogon_zeleni.png": "57a2fd85cdf1b24f9f5dd8882ba840be",
"assets/assets/images/olovka.png": "0a0db92e2560502678bb1dfa0cf8f89d",
"assets/assets/images/ovan.png": "5e4055d0946a455fd9e2f21335540cf3",
"assets/assets/images/paper_torn.png": "c1005c067029171e02dba982146dded4",
"assets/assets/images/pas.png": "341bf21bc46bdde31875838d23a9a8d7",
"assets/assets/images/penkala.gif": "3bb7280ff7210ee9bc7c42ea681da21b",
"assets/assets/images/peterokut_crveni.png": "54ab2b7cae61c7f4c3cb7d1dde4eabc9",
"assets/assets/images/peterokut_zeleni.png": "742e3c12958c9f47aca762f1c3c08e84",
"assets/assets/images/pila.png": "f11e7ef2205606a67293865eaedf5e0b",
"assets/assets/images/pointing_finger.png": "fdc3305512b578974fc6a3c44703665b",
"assets/assets/images/riba.png": "18bdbb88f38d2d8e6c1ddd6bca90bb39",
"assets/assets/images/ruza_vjetrova.png": "833ebe7fdc7d39f8d4a08350cdfb22b0",
"assets/assets/images/sesterokut_crveni.png": "9cb3b188e5a11d3a34b96d4a40afebdd",
"assets/assets/images/sesterokut_zeleni.png": "4beec1fc72984176d75780375dce64d7",
"assets/assets/images/tacke.png": "d768219b2398c01388fa17676435b44c",
"assets/assets/images/tramvaj.png": "03e6c2dc873cced21f5f10d32283cf4f",
"assets/assets/images/trg_tlocrt.png": "0827594368ad57fcfabaf8d9d544105e",
"assets/assets/images/trg_tlocrt_1.png": "8938fb4e61bd14283de832ba96f0e1a8",
"assets/assets/images/trg_tlocrt_10.png": "24b335cdfa1de91f4f7704224e4a1b81",
"assets/assets/images/trg_tlocrt_11.png": "bd0ddc9e54acc93408dc3485ce6dfda5",
"assets/assets/images/trg_tlocrt_12.png": "487a8c3c020ab1a5c581c9c8ba797026",
"assets/assets/images/trg_tlocrt_13.png": "c192422c9f7da21961367b362cf7d379",
"assets/assets/images/trg_tlocrt_14.png": "ec43a274d3cd0c9621171a0de52e40c5",
"assets/assets/images/trg_tlocrt_15.png": "00222f8309bf5974bf4873dbc087ccc3",
"assets/assets/images/trg_tlocrt_16.png": "b2d218bcea60d0f6178c2b0682e07fdc",
"assets/assets/images/trg_tlocrt_17.png": "9b661aeb35ada5488821c969f688a114",
"assets/assets/images/trg_tlocrt_18.png": "81feadf6ca060aac50730d5e25b2317e",
"assets/assets/images/trg_tlocrt_2.png": "14413534096facb796ad03b23111354d",
"assets/assets/images/trg_tlocrt_3.png": "4d218e6bb946877a5579761be3224e44",
"assets/assets/images/trg_tlocrt_4.png": "d9977b76a024633aa9e401a9181c2a57",
"assets/assets/images/trg_tlocrt_5.png": "be97b0251d5dd73f48dc74bf26959541",
"assets/assets/images/trg_tlocrt_6.png": "584fe1f27bf08432d8be8637ea7a828a",
"assets/assets/images/trg_tlocrt_7.png": "9f2d9947b96ec2431d05fa065bdf369e",
"assets/assets/images/trg_tlocrt_8.png": "9e7b4560c9d1b2e7138fb28a294894a6",
"assets/assets/images/trg_tlocrt_9.png": "32b819865f79a56a49f5fa1411bd6ea5",
"assets/assets/images/trg_tlocrt_tocno.png": "16b343d69aec782a96591a6dbbaf8220",
"assets/assets/images/upitnik.png": "829f506872bb8e5dd4bba0dba61cf21d",
"assets/assets/images/zagorka.gif": "88e4dcdead2e2a15834a3f0a438cdff2",
"assets/assets/images/zagorka_kraj.gif": "b25d11f6ef72ed46f039175fda0e01c8",
"assets/assets/resources/langs/en-US.json": "a2e5af75e6d2c6473d3420c7e5a973ed",
"assets/assets/resources/langs/hr-HR.json": "e39f230bdb63711f1fa0fdee35a0886b",
"assets/assets/video/main_video_hr.mp4": "e46bc8317523ae2935e780318f559f3b",
"assets/FontManifest.json": "f17f17014177bad29326a77344592664",
"assets/fonts/MaterialIcons-Regular.otf": "8635fe13ddd5e5b9a1756c25bd7876ed",
"assets/NOTICES": "00540e124fe9a9f448963df234ae8699",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "bc789959bfd98a4fa726ebd492638b9e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "670929a814aa1710db60c13a6ae5c0c3",
"/": "670929a814aa1710db60c13a6ae5c0c3",
"main.dart.js": "d2549a69554c6241a2b2b2e1b69b717c",
"manifest.json": "c3959cb8b7e549db4f354158514cc715",
"version.json": "5d6b01a4411f1c62dca9dd6ed1698e29"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
