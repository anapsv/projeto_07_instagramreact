import React from "react"
export default function Posts() {

    const [heart1, placeHeart] = React.useState("heart-outline")
    const [heart2, placeHeart2] = React.useState("heart-outline")
    const [color, heartColor1] = React.useState()
    const [color1, heartColor2] = React.useState()
    const [totalLikes, setTotalLikes] = React.useState(101.523)
    const [totalLikes1, setTotalLikes1] = React.useState(99.159)
    function like1() {
        if (color !== 'danger') {
            placeHeart('heart');
            heartColor1('danger');
            setTotalLikes(totalLikes + 0.001);
        }
        else {
            placeHeart('heart-outline');
            heartColor1('');
            setTotalLikes(totalLikes - 0.001);
        }


    }
    function like2() {
        if (color1 !== 'danger') {
            placeHeart2('heart');
            heartColor2('danger');
            setTotalLikes1(totalLikes1 + 0.001);
        } else {
            placeHeart2('heart-outline');
            heartColor2('');
            setTotalLikes1(totalLikes1 - 0.001);
        }

    }
    const allPosts = [
        {
            username: 'meowed',
            userIcon: "assets/img/meowed.svg",
            postPic: 'assets/img/gato-telefone.svg',
            avatarLiked: 'assets/img/respondeai.svg',
            usernameLiked: 'respondeai',
            numberOfLikes: totalLikes,
            heartFunction: like1,
            heartArray: heart1,
            heartColor: color
        },
        {
            username: 'barked',
            userIcon: "assets/img/barked.svg",
            postPic: 'assets/img/dog.svg',
            avatarLiked: 'assets/img/adorable_animals.svg',
            usernameLiked: 'adorable_animals',
            numberOfLikes: totalLikes1.toFixed(3),
            heartFunction: like2,
            heartArray: heart2,
            heartColor: color1
        }
    ]

    return (
        <div class="posts">
            {allPosts.map((array) => {
                return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={array.userIcon} alt="Foto de ícone do usuário autor do post" />
                                {array.username}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div onClick={array.heartFunction} class="conteudo">
                            <img src={array.postPic} alt="Foto postada pelo autor do post" />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon color={array.heartColor} onClick={array.heartFunction} name={array.heartArray}></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={array.avatarLiked} alt="Foto de ícone da pessoa ou de uma das pessoas que curtiram o post" />
                                <div class="texto">
                                    Curtido por <strong>{array.usernameLiked}</strong> e <strong>outras {array.numberOfLikes} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}