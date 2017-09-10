<template>
    <section class="page-index" v-if="showPage">
        <slide-menu
                @hideMenu="hideMenu"
                @selectChange="selectChange"
        >
        </slide-menu>
        <div class="overlay" @click="hideMenu"></div>
        <header-nav
                :type="type"
                @selectChange="selectChange"
                @showMobileMenu="showMenu"
        >
        </header-nav>
        <div class="container" :class="type">
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
            <About v-if="selected === 'about' && !isShowContent"
                   :type="type"
            >
            </About>
            <join-us v-if="selected === 'joinus' && !isShowContent"
                     :type="type"
            >
            </join-us>
            <my-content
                    v-if="isShowContent"
                    :type="type"
                    :content-id="contentId"
            >
            </my-content>
        </div>
        <dev-footer v-show="showFooter()"
                    :type="type"
        >
        </dev-footer>
    </section>
</template>

<script>

    import axios from 'axios';
    import headerNav from '@/components/pages/header/header'
    import slideMenu from '@/components/pages/slide-menu/slide-menu'
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
                if ($(window).width() / dpr > 540) {
                    if (1020 < $(window).width()) {
                        this.type = 'large'
                    } else {
                        this.type = 'middle'
                    }
                } else {
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
                if (this.type === 'small') {
                    let mobileSubMenu = $('.mobile-sub-menu');
                    let headerBar = $('.header-nav-in.small');
                    headerBar.css('top', 0);
                    mobileSubMenu.css('top', 0);
                }
            },
            showContent(id) {
                this.contentId = id;
                this.isShowContent = true;
            },
            hideContent() {
                this.isShowContent = false;
            },
            showMenu(){
                // 添加禁止滚动
                this.showStuff();
            },
            hideMenu(){
                // 添加禁止滚动
                this.hideStuff();
            },
            showStuff(){
                this.scrollDisable();
                let mobileSubMenu = $('.mobile-sub-menu');
                let headerBar = $('.header-nav-in.small');
                let top = document.body.scrollTop;
                let pageIndex = $('.page-index');
                let overLay = $('.overlay');

                pageIndex.addClass('hideMenu');
                pageIndex.addClass('showMenu');
                overLay.addClass('enable');
                headerBar.css('position', 'absolute');
                headerBar.css('top', top);
                mobileSubMenu.css('top', top);
            },
            hideStuff(){
                let headerBar = $('.header-nav-in.small');
                let pageIndex = $('.page-index');
                let overLay = $('.overlay');

                pageIndex.removeClass('showMenu');
                // 处理完动画 移除层叠上下文
                setTimeout(() => {
                    pageIndex.removeClass('hideMenu');
                    headerBar.css('position', 'fixed');
                    headerBar.css('top', 0);
                    this.scrollEnable();
                }, 900);
                overLay.removeClass('enable');
            },
            scrollDisable(){
                // 移动端取消滚动条
                document.documentElement.style.overflow = 'hidden';
                $('body').on('touchmove', function (event) {
                    event.preventDefault();
                });
            },
            scrollEnable(){
                // 移动端取消滚动条
                document.documentElement.style.overflow = 'auto';
                $('body').off('touchmove');
            }
        },
        components: {
            headerNav,
            slideMenu,
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
        &.hideMenu {
            transform: translate3d(0px, 0px, 0px);
            transition: 0.9s cubic-bezier(.64, 0, 1, .74);
        }
        .overlay {
            visibility: hidden;
            background: rgba(0, 0, 0, .6);
            opacity: 0;
            position: absolute;
            z-index: 100;
            transition: opacity 2s cubic-bezier(.23, 1, .32, 1) 0s;
            &.enable {
                width: 100%;
                height: 100%;
                visibility: visible;
                opacity: 1;
            }
        }
        &.showMenu {
            transform: translate3d(550px, 0px, 0px);
            transition: 0.9s cubic-bezier(0, 0.03, 0.13, 0.99);
        }
        .mobile-sub-menu {
            font-family: Neosans;
            font-size: 36px;
            letter-spacing: 3px;
            line-height: 2.5em;
            color: #808080;
            padding: 350px 0 0 130px;
            margin-left: -550px;
            height: calc(1334px - 350px);
            width: 420px;
            position: absolute;
            i {
                display: block;
                position: absolute;
                top: 65px;
                left: 35px;
                width: 36px;
                height: 36px;
                background: url("../slide-menu/img/x.png");
                background-size: 100% 100%;
            }
        }
        .container {
            background-color: black;
            &.large, &.middle {
                padding-top: 115px;
            }
            &.small {
                padding-top: 165px;
            }
        }
    }
</style>
