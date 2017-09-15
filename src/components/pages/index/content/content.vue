<template>
    <section class="page-content">
        <div class="container">
            <div class="movie-wrapper" :class="type">
                <div class="movie">
                    <iframe :height=height width=100% src="http://player.youku.com/embed/XMTMzNDkzNjQ3Ng=="
                            frameborder=0 allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="title" v-text="initData.title"></div>
            <div class="line"></div>
            <div class="sub-title" v-text="initData.subTitle"></div>
            <div class="sub-content" v-if="showSubContent" v-html="htmlEntityDecode(initData.subContent)"></div>
            <div class="detail-block" :class="type">
                <div class="item-block" v-for="(value, index) in initData.contentArr"
                     v-show="showContent(index) || showAll">
                    <div class="item-title" v-text="value.title"></div>
                    <div class="item-sub-content" v-html="htmlEntityDecode(value.content)"></div>
                    <div class="img-group">
                        <div class="img-item" v-for="(ImgValue, imgIndex) in value.imgs">
                            <img :src="chooseImg(index, imgIndex)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="view-more" @click="viewMore()" v-if="!showAll">
                <i class="arrow"></i>
                查看全部作品
            </div>
        </div>
    </section>
</template>

<script>

    import axios from 'axios';
    import headerNav from '@/components/pages/header/header';
    import devFooter from '@/components/pages/footer/footer';

    export default {
        name: 'content',
        props: {
            type: {
                type: String,
                required: false,
                default: 'large'
            },
            contentId: {
                type: String,
                required: true,
                default: ''
            }
        },
        data () {
            return {
                initData: {},
                height: 0,
                url: [],
                total: {
                    length: 0,
                },
                maxItem: 1,
                showAll: false,
                movieLoaded: false,
                showSubContent: false
            };
        },
        components: {
            headerNav,
            devFooter
        },
        created() {
            var self = this;

            axios({
                method: "POST",
                url: 'index.php?m=Home&c=Index&a=detail&id=' + this.contentId,
            }).then(response => {
                self.initData = response.data;
                self.movieLoaded = true;
                self.showSubContent = true;
                self.initData.contentArr.forEach(function (item, index) {
                    let tmp = [];
                    item.imgs.forEach(function (itemImg, indexImg) {
                        tmp.push(itemImg);
                    });
                    self.url.push(tmp);
                });
                self.total.length = self.initData.contentArr.length;
            }).catch(err => {
                console.log(err);
            });
        },
        methods: {
            htmlEntityDecode(value){
                return value
                        .replace(value ? /&(?!#?\w+;)/g : /&/g, '&amp;')
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, "\"")
                        .replace(/&#39;/g, "\'");
            },
            px2rem(num) {
                return num / 192 + 'rem';
            },
            chooseImg(index, imgIndex) {
                return this.url[index][imgIndex];
            },
            viewMore() {
                this.$emit('viewMore', true);
                this.maxItem = this.total.length;
                this.showAll = true;
            },
            showContent(index) {
                return index < this.maxItem;
            }
        },
        mounted() {
            this.height = parseInt($('.movie').width()) / 1860 * 1060;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped rel="stylesheet/less">
    .page-content {
        font-family: SourceHanSansCN-Regular;
        background-color: black;
        .container {
            color: #fff;
            width: 100%;
            margin: 0 auto;
            padding-top: 60px;
            .movie-wrapper {
                &.large {
                    margin-left: 30px;
                    margin-right: 30px;
                }
                &.small {
                    margin-left: 40px;
                    margin-right: 40px;
                }
                .movie {
                    width: 100%;
                }
            }
            .title {
                margin-top: 60px;
                font-size: 36px;
                text-align: center;
            }
            .line {
                margin: 0 auto;
                margin-top: 50px;
                width: 26px;
                border-bottom: 4px solid #fff;
            }
            .sub-title {
                text-align: center;
                margin-top: 50px;
                font-size: 24px;
            }
            .sub-content {
                color: #ccc;
                font-size: 18px;
                margin-top: 80px;
                line-height: 2em;
                text-align: center;
            }
            .detail-block {
                overflow: hidden;
                margin-top: 20px;
                .item-title {
                    text-align: center;
                    font-size: 36px;
                }
                .item-sub-content {
                    color: #ccc;
                    margin-top: 80px;
                    margin-bottom: 60px;
                    text-align: center;
                    font-size: 18px;
                    line-height: 2em;
                }
                &.large, &.middle {
                    .item-block {
                        margin-top: 140px;
                        .img-group {
                            width: 1890px;
                            position: relative;
                            display: block;
                            overflow: hidden;
                            margin: 0 auto;
                            .img-item {
                                margin: 15px;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                                &:nth-child(6n+1) {
                                    float: left;
                                    width: 915px;
                                }
                                &:nth-child(6n+2) {
                                    float: left;
                                    width: 915px;
                                }
                                &:nth-child(6n+3) {
                                    float: left;
                                    width: 1860px;
                                }
                                &:nth-child(6n+4) {
                                    float: left;
                                    width: 600px;
                                }
                                &:nth-child(6n+5) {
                                    float: left;
                                    width: 600px;
                                }
                                &:nth-child(6n+6) {
                                    float: left;
                                    width: 600px;
                                }
                            }
                        }

                    }
                }
                &.small {
                    .img-item {
                        position: relative;
                        display: block;
                        margin: 15px 40px 15px 40px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .view-more {
            padding-bottom: 55px;
            .arrow {
                margin: 15px auto 30px auto;
                display: block;
                width: 28px;
                height: 18px;
                background: url("./img/arrow.png") no-repeat;
                background-size: contain;
            }
            font-size: 22px;
            text-align: center;
            color: #fff;
        }
    }
</style>
