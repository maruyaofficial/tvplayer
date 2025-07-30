const channels = [
  {
    name: "CINEMAX",
    category: "Movies",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/400/default_ott.mpd",
    drm: {
      clearkey: {
        keyId: "31363331363734363432333339393538",
        key: "abcd1234efgh5678ijkl9012mnop3456"
      }
    }
  },
  {
    name: "Amazon Prime Video",
    category: "Movies",
    type: "mpd",
    url: "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/at8teepvrn/out/v1/ab8d59a847f046c88f07a7f3d115d7fe/cenc.mpd",
    drm: {
      clearkey: {
        keyId: "40314mkWgwF",
        key: "f812aeae6be5b924a8181b512d5d7910"
      }
    }
  },
  {
    name: "Local Channel",
    category: "Local",
    type: "mpd",
    url: "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001093/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    drm: {
      clearkey: {
        keyId: "94bc19ad9cb04a7e6871e650a7f6529c",
        key: "a1b2c3d4e5f678901234abcd5678ef90"
      }
    }
  },
  {
    name: "PREMIERE 6",
    category: "Movies",
    type: "mpd",
    url: "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001314/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    drm: {
      clearkey: {
        keyId: "33333f38930949b1af65b3361ad80d1d",
        key: "44a9e6477651b3b47f3a2b727d562835"
      }
    }
  },
  {
    name: "BS TV TOKYO",
    category: "International",
    type: "m3u8",
    url: "https://amg17931-zee-amg17931c9-samsung-ph-6528.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeesine-samsungph/playlist.m3u8",
    drm: {
      clearkey: {
        keyId: "f4bef9f080f4a3a52dd55d5c3b8b81e2",
        key: "31af30d2fa3e6f39e9e049c7a6ddc3bb"
      }
    }
  },
  {
    name: "CINEMO!",
    category: "Movies",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/900/default_ott.mpd",
    drm: {
      clearkey: {
        keyId: "44a9e6477651b3b47f3a2b727d562835",
        key: "aa2211bb3344cc5566778899ddeeff00"
      }
    }
  },
  {
    name: "FASHION TV",
    category: "Lifestyle",
    type: "m3u8",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5171/default_ott.mpd",
    drm: {
      clearkey: {
        keyId: "40d8bb2a46ffd03540e0c6210ece57ce",
        key: "1234567890abcdef1234567890abcdef"
      }
    }
  },
  {
    name: "Astro Arena",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2604/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "efda647dad723563b625be8c05ee6110",
        key: "6776985938b332164b97b81fe566a34a"
      }
    }
  },
  {
    name: "Astro Arena 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5057/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "ead0335d60401225727a6d531e9c2710",
        key: "1ee3b252227c5c2ec9378c833d2e14ff"
      }
    }
  },
  {
    name: "Astro Badminton",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5170/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "6ff0e040d544ec3f02243865990f0c10",
        key: "83728b47019abdbb37aa36ed5f2951bd"
      }
    }
  },
  {
    name: "Astro Badminton 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5172/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "72ad6eaa1904540138487fffa3ad6510",
        key: "17c19ad670a557e6882419d6923fad27"
      }
    }
  },
  {
    name: "Arena Bola",
    category: "Sports",
    type: "mpd",
    url: "https://l01.dp.sooka.my/5099/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "57833c900c4c437f82daf6785eb6ef36",
        key: "7bf4663e43cdc277b4ae18219c81d2a1,fb06bb8266fb4a998e7c4e7e90461556:52242587d8106c4b3ed596c7a56b4e28"
      }
    }
  },
  {
    name: "Arena Bola 2",
    category: "Sports",
    type: "mpd",
    url: "https://l02.dp.sooka.my/5100/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "1314914fb4f94984b7a7572a03b69f93",
        key: "7ec8c4186df69a58cf640291a7c9ac7c,f166a88a7f1b40bba2e399bf2f972365:abf14067e089861730f4c6ff24b52dba"
      }
    }
  },
  {
    name: "Astro Football",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2506/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "79f4028730acca9ab8b00f26158ddb10",
        key: "91febe843c08c7cc523efd827292e40e"
      }
    }
  },
  {
    name: "Astro Grandstand",
    category: "Sports",
    type: "mpd",
    url: "https://l03.dp.sooka.my/2701/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "66c94fd8908c43ccb5e7b3dd58a990d2",
        key: "d489da5a8496d00a04757d432816ab71,505aefcda9084f83bc5c6cc53f0ef9c6:f89898184ed921e225cd89f4d2ea1035"
      }
    }
  },
  {
    name: "Astro Premier League",
    category: "Sports",
    type: "mpd",
    url: "https://l01.dp.sooka.my/601/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "bb2dc3cfa3024039ae59b55e6b0b5de5",
        key: "03d25d6ceb16fc4e007697e9d2124fac,1090bef3275b45d188200b828fe30527:43eff6a8da896a34056f339ec9562045"
      }
    }
  },
  {
    name: "Astro Premier League 2",
    category: "Sports",
    type: "mpd",
    url: "https://l02.dp.sooka.my/2104/linear/index.mpd",
    drm: {
      clearkey: {
        keyId: "4ecad9adae8f44f0b1c8bf5c492da613",
        key: "43ac85382893194802f0d34dbf71059e,537a246e0284449a862dfd4dc43b7c79:f3829c61a21ceae05ee5d5260679c210"
      }
    }
  },
  {
    name: "Astro Premier League 3",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5108/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "1ece3ecb41699e855c6dc9a283908210",
        key: "ba08be767e1a5e89777e68a6998a8c19"
      }
    }
  },
  {
    name: "Astro Premier League 4",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5111/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "3225f837a4b95d6e46683c53818c1710",
        key: "3e1b57c06699c7e408e7aa49ff57d4f4"
      }
    }
  },
  {
    name: "Astro Premier League 5",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5113/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "229670469469aa6f78bc5bbe10071810",
        key: "3b3ede68e8bb9d0d4e3b4517c422cccf"
      }
    }
  },
  {
    name: "Astro Cricket",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2505/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "97b845a70f564843ad6bfb9b31c8a4f0",
        key: "2f62ddcd4e20baf7c5f3e8e3e3c2f50b"
      }
    }
  },
  {
    name: "Astro SuperSport",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/601/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "0d624b47779a41ff830890d4ecb6d410",
        key: "6c37b3e5cc8a056b7a658e7b1e755f35"
      }
    }
  },
  {
    name: "Astro SuperSport 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2104/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "c45b393e6b464469a3f2c1b8a75e2e93",
        key: "3f183a7ebfe76f22ecf1d2e2c55de6e2"
      }
    }
  },
  {
    name: "Astro SuperSport 3",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2701/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "fda3f295b35b4c17be6f40c9ad61b22a",
        key: "0b9af7b4a4e9fc7636e4f616ecfbbd7c"
      }
    }
  },
  {
    name: "Astro SuperSport 4",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2504/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "4490de22d7fc4c93aa2b332f0838e63b",
        key: "65e69f6698fc99255cddc1c6c1fce7cb"
      }
    }
  },
  {
    name: "Astro SuperSport 5",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2508/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "258893312b6d443f98f8e09c6d7c8d70",
        key: "bc1887f4bbdcd29fa8ea30f88ff1c8fc"
      }
    }
  },
  {
    name: "beIN Sports",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5054/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "e88cfead8d1b414ca299fbaf8f6b1a36",
        key: "fbd769b2d6dd9f253c5c665bdfcd71fa"
      }
    }
  },
  {
    name: "beIN Sports 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5064/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "ec6148ad5e874f00b7c812c062c7343a",
        key: "e31e5bc2dbd2b49d6dc56d2ac78e0e0f"
      }
    }
  },
  {
    name: "beIN Sports 3",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5074/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "437c2fd0d1cf4121b48ff773ca0ccaa7",
        key: "1f84c7951bb1e2b54d94ed469d0aaf9b"
      }
    }
  },
  {
    name: "W-Sport",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2302/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "cb99b8dbcf2b4f2292e90c988f087a2d",
        key: "b3bbda4e54e9b78de97d2f6619c984d6"
      }
    }
  },
  {
    name: "Astro Cricket 2",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2507/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "28c5f64fa3dc4c6ba5abdbf7b66f9f63",
        key: "2ddcf6e728de36e7fa50a1bcdd76edb4"
      }
    }
  },
  {
    name: "Astro eGG",
    category: "Sports",
    type: "mpd",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2607/default_primary.mpd",
    drm: {
      clearkey: {
        keyId: "f3b62d546dd348c99eae60a4cba8aa65",
        key: "a4bb5b23e23cd774aa7b4f54258e6713"
      }
    }
  }
];
window.channels = channels;
