<template>
    <section class="page-index" v-if="showPage">
        <header-nav
                @selectChange="selectChange"
                :light-num="1"
        >
        </header-nav>
        <div class="container">
            <div v-show="selected === 'all' && !isShowContent">
                <All
                        :type="type"
                        :img-arr="imgArr.all"
                        :url="url.all"
                        :show-all="showAll"
                        @showContent="showContent"
                >
                </All>
            </div>
            <div v-show="selected === 'motiongraphic' && !isShowContent">
                <Mg
                        :type="type"
                        :img-arr="imgArr.motiongraphic"
                        :url="url.motiongraphic"
                        :show-all="showAll"
                        @showContent="showContent"
                >
                </Mg>
            </div>
            <div v-show="selected === 'h5' && !isShowContent">
                <dev-h5
                        :type="type"
                        :img-arr="imgArr.h5"
                        :url="url.h5"
                        :show-all="showAll"
                        @showContent="showContent"
                >
                </dev-h5>
            </div>
            <div v-show="selected === 'advertising' && !isShowContent">
                <Advertising
                        :type="type"
                        :img-arr="imgArr.advertising"
                        :url="url.advertising"
                        :show-all="showAll"
                        @showContent="showContent"
                >
                </Advertising>
            </div>
            <div v-show="selected === 'shooting' && !isShowContent">
                <Shooting
                        :type="type"
                        :img-arr="imgArr.shooting"
                        :url="url.shooting"
                        :show-all="showAll"
                        @showContent="showContent"
                >
                </Shooting>
            </div>
            <About v-if="selected === 'about' && !isShowContent">

            </About>
            <join-us v-if="selected === 'joinus' && !isShowContent">

            </join-us>
            <my-content v-if="isShowContent"
                        :content-id="contentId"
            >
            </my-content>
        </div>
        <dev-footer v-show="showFooter()"></dev-footer>
    </section>
</template>

<script>

    import axios from 'axios';
    import headerNav from '@/components/pages/header/header'
    import All from '@/components/pages/index/all/all'
    import Mg from '@/components/pages/index/mg/mg'
    import devH5 from '@/components/pages/index/h5/h5'
    import Advertising from '@/components/pages/index/advertising/advertising'
    import Shooting from '@/components/pages/index/shooting/shooting'
    import About from '@/components/pages/index/about/about'
    import joinUs from '@/components/pages/index/joinus/joinus'
    import myContent from '@/components/pages/index/content/content'
    import devFooter from '@/components/pages/footer/footer'


    export default {
        name: 'index',
        data () {
            let imgArr = {};

            let url = {};

            return {
                imgArr: imgArr,
                url: url,
                showAll: {
                    all: false
                },
                selected: '',
                type: '',
                showPage: false,
                showFooter() {
                    return this.selected !== 'about' && this.selected !== 'joinus'
                },
                isShowContent: false,
                contentId: 0
            }
        },
        computed: {},
        methods: {
            whichSize() {
                if (1020 < $(window).width()) {
                    this.type = 'large'
                } else if (750 < $(window).width() && $(window).width() < 1020) {
                    this.type = 'middle'
                } else if ($(window).width() <= 750) {
                    this.type = 'small'
                }
            },
            px2rem(num) {
                return num / 192 + 'rem';
            },
            selectChange(key) {
                $(window).scrollTop(0);
                this.hideContent();
                this.selected = key;
            },
            showContent(id) {
                this.contentId = id;
                this.isShowContent = true;
            },
            hideContent() {
                this.isShowContent = false;
            }
        },
        components: {
            headerNav,
            devFooter,
            All,
            Mg,
            devH5,
            Advertising,
            Shooting,
            About,
            joinUs,
            myContent
        },
        created() {
            var self = this;
            axios({
                method: "POST",
                url: 'index.php?m=Home&c=Index&a=getJson'
            }).then(response => {
                self.imgArr = response.data;
                Object.keys(self.imgArr).forEach(function (key) {
                    self.url[key] = [];
                    Object.keys(self.imgArr[key]).forEach(function (keyItem) {
                        self.url[key].push(self.imgArr[key][keyItem].image);
                    });
                });
                self.selected = 'all';
                self.showPage = true;
            }).catch(err => {
                console.log(err);
            });
        },
        mounted() {
            var self = this;
            self.whichSize();
            $(window).resize(() => {
                self.whichSize();
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped rel="stylesheet/less">
    .page-index {
        .container {
            padding-top: 115px;
            background-color: black;
        }
    }
</style>
