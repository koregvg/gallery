<template>
    <section class="page-about">
        <div class="container">
            <div class="about">
                <div class="title">About</div>
                <div class="line"></div>
                <div class="content-block en">
                    <p>FiftyStudio is a creative visual design</p>
                    <p>company, focusing on the creation and</p>
                    <p>designing of qualified film and animation.</p>
                    <p>Through the designing, animation, special</p>
                    <p>effects and several creative ways, we put</p>
                    <p>the information and content into the</p>
                    <p>dynamic visualization.</p>
                </div>
                <div class="line"></div>
                <div class="content-block cn">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;五时视觉是一家视觉设计创意公司，专注于品质的</p>
                    <p>影像、动画的创意与设计。通过设计、动画、特效及</p>
                    <p>多种创新形式，将信息与内容进行动态视觉化呈现。</p>
                </div>
                <!--<div class="img-block" v-if="type !== 'small'"></div>-->
            </div>
            <div class="services" :class="type">
                <div class="title">Services</div>
                <div class="line"></div>
                <div class="content-block">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;提供全套视觉解决方案，涵盖创意策划及执行。</p>
                    <p>服务范围: 互联网大会屏幕、MG动画（图形动画）</p>
                    <p>新媒体交互H5、TVC广告、电影片头等。</p>
                </div>
                <img class="banner" src="./img/band.png" v-if="type === 'small'">
            </div>
            <div class="contact">
                <div class="title">Contact</div>
                <div class="line"></div>
                <div class="content-block">
                    <p>微博：五时视觉-fiftystudio</p>
                    <p>Email:fiftystudio@sina.com</p>
                    <p>QQ:358658588 412223918 615687438</p>
                </div>
            </div>
            <div class="following" :class="type">
                <div class="title">Following</div>
                <div class="line"></div>
                <div class="icon-wrapper">
                    <i class="weixin"></i>
                    <i class="xinlang"></i>
                    <i class="zcool"></i>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import headerNav from '@/components/pages/header/header';

    export default {
        name: 'about',
        props: {
            type: {
                type: String,
                required: true,
                default: 'large'
            }
        },
        data () {
            return {
                lightNum: 2
            }
        },
        components: {
            headerNav
        },
        methods: {
            jumpTo (param) {
                location.href = '/#/' + param;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped rel="stylesheet/less">
    .page-about {
        background-color: #000;
        .container {
            padding-top: 60px;
            background-color: black;
            width: 100%;
            .about {
                position: relative;
                padding: 0 30px 30px 30px;
                color: #fff;
                overflow: hidden;
                .title {
                    font-family: Neosans;
                    font-size: 60px;
                    margin-bottom: 100px;
                }
                .line {
                    height: 0;
                    width: 26px;
                    border-top: 4px solid #fff;
                    margin-bottom: 40px;
                }
                .content-block {
                    max-width: 800px;
                    &.en {
                        font-family: Neosans;
                        letter-spacing: 2px;
                    }
                    &.cn {
                        font-family: SourceHanSansCN-Regular;
                    }
                    font-size: 18px;
                    margin-bottom: 50px;
                    line-height: 2em;
                    &:last-child {
                        p {
                            width: 700px;
                        }
                        margin-bottom: 105px;
                    }
                }
                .img-block {
                    position: absolute;
                    width: 1059px;
                    height: 594px;
                    background: url("./img/img-block.png");
                    background-size: contain;
                    right: 30px;
                    bottom: 30px;
                }
            }
            .services {
                min-height: 270px;
                padding: 30px;
                background-color: #fff;
                &.large, &.middle {
                    background: url("./img/service.png") #FFF no-repeat;
                    background-size: contain;
                }
                .title {
                    font-family: Neosans;
                    font-size: 60px;
                    margin-bottom: 40px;
                }
                .line {
                    height: 0;
                    width: 26px;
                    margin-bottom: 38px;
                    border-top: 4px solid #000;
                }
                .content-block {
                    max-width: 800px;
                    font-family: SourceHanSansCN-Regular;
                    font-size: 18px;
                    line-height: 1.7em;
                }
                .banner {
                    margin-top: 40px;
                    width: 100%;
                    height: 100%;
                }
            }
            .contact {
                min-height: 290px;
                padding: 50px 30px;
                color: #fff;
                .title {
                    font-family: Neosans;
                    font-size: 60px;
                    margin-bottom: 40px;
                }
                .line {
                    height: 0;
                    width: 26px;
                    border-top: 4px solid #fff;
                    margin-bottom: 40px;
                }
                .content-block {
                    font-family: SourceHanSansCN-Regular;
                    font-size: 18px;
                    line-height: 1.7em;
                }
            }
            .following {
                position: relative;
                background-color: #fff;
                height: 310px;
                padding: 30px;
                color: #000;
                .title {
                    font-family: Neosans;
                    font-size: 60px;
                    margin-bottom: 40px;
                }
                .line {
                    height: 0;
                    width: 26px;
                    border-top: 4px solid #000;
                    margin-bottom: 40px;
                }
                &.large, &.middle {
                    margin-bottom: 50px;
                    .weixin {
                        position: absolute;
                        top: 130px;
                        right: 900px;
                        width: 120px;
                        height: 80px;
                        background: url("./img/weixin.png");
                        background-size: contain;
                    }
                    .xinlang {
                        position: absolute;
                        top: 115px;
                        right: 600px;
                        width: 147px;
                        height: 108px;
                        background: url("./img/xinlang.png");
                        background-size: contain;
                    }
                    .zcool {
                        position: absolute;
                        top: 135px;
                        right: 200px;
                        width: 216px;
                        height: 90px;
                        background: url("./img/zcool.png");
                        background-size: contain;
                    }
                }
                &.small {
                    .icon-wrapper {
                        display: flex;
                        justify-content: space-between;
                        .weixin {
                            left: -17px;
                            display: inline-block;
                            position: relative;
                            width: 120px;
                            height: 80px;
                            background: url("./img/weixin.png");
                            background-size: contain;
                        }
                        .xinlang {
                            display: inline-block;
                            position: relative;
                            top: -17px;
                            width: 147px;
                            height: 108px;
                            background: url("./img/xinlang.png");
                            background-size: contain;
                        }
                        .zcool {
                            display: inline-block;
                            position: relative;
                            width: 216px;
                            height: 90px;
                            background: url("./img/zcool.png");
                            background-size: contain;
                        }
                    }
                }
            }
        }
    }
</style>
