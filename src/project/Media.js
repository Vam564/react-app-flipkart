import React, { useEffect, useReducer } from 'react'
import './Media.css';

const Media = () => {


    const INITIAL_STATE = {
        userProfile: [],
        isAPILoaded: false,
        input: '',
        comments: [],
        followCount: 1322
    }
    const reducer = (state, action) => {
        const { type, context } = action
        const { userProfile, input, comments } = state;
        switch (type) {
            case 'API_SUCCESS': {
                return {
                    ...state,
                    ...context
                }
            }
            case 'HANDLE_INPUT': {
                const { target: { value } } = context
                return {
                    ...state,
                    input: value
                }
            }
            case 'UPDATE_COMMENT': {

                let s = {
                    label: context,
                    comment: input
                }
                console.log(s)

                return {
                    ...state,
                    comments: [...comments, s]
                }
            }
            case 'FOLLOW': {
                const { index, follow } = context
                return {
                    ...state,
                    followCount: follow
                }
            }
            default: {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const { userProfile, comments, input, followCount } = state;

    // console.log(userProfile.map(key => key.activity.map(key =>key.userImg)))
    console.log(comments)

    useEffect(() => {
        fetch("https://jsonblob.com/api/92369dd8-8bac-11ea-b153-09f2ee6f0dba")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'API_SUCCESS', context: { userProfile: [...json], isAPILoaded: true } })

            });
    }, []);
    const handleInput = ({ target }) => {
        dispatch({ type: 'HANDLE_INPUT', context: { target } })

    }
    const updateComment = (index) => {
        console.log(index)
        //comments[index]=input
        dispatch({ type: 'UPDATE_COMMENT', context: index })

    }
    const follow = (index) => {
        const follow = userProfile.Followers++;

        dispatch({ type: 'FOLLOW', context: { index, follow } })
    }
    const newsFeedClose = () => {
        
    }
    return (
        <>
            <div className="body">
                <ul className="nav justify-content-end">
                    <li className="nav-item ">
                        <a
                            className="nav-link  list"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                        ><i className="fa fa-dashboard mr-2"></i>Home</a
                        >
                    </li>
                    <li className="nav-item  ml-n4">
                        <a
                            className="nav-link   list"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                        >Examples</a
                        >
                    </li>
                    <li className="nav-item ml-n4">
                        <a
                            className="nav-link text-light "
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                        >User Profile</a
                        >
                    </li>
                </ul>
                <section className="content">
                    <div className="row mt-3 ml-2">
                        <div className="col-md-3" id="left">
                            {userProfile.map((key, index) => (
                                <div>
                                    <div class="box box-primary">
                                        <div class="box-body box-profile">
                                            <img class="profile-user-img img-responsive img-circle" src={key.personImg} alt="User profile picture" />
                                            <h3 class="profile-username text-center">{key.personName}</h3>
                                            <p class="text-muted text-center">{key.personProfession}</p>
                                            <hr />
                                            <div class="col"><span><strong>Followers</strong></span><span
                                                class="values float-right"  >{followCount}</span></div>
                                            <hr />
                                            <div class="col"><span><strong>Following</strong></span><span
                                                class="values float-right">{key.Following}</span></div>
                                            <hr />
                                            <div class="col"><span><strong>Friends</strong></span><span
                                                class="values float-right">{key.Friends}</span></div>
                                            <hr />
                                            <div id="follow">
                                                <button class="btn-sm btn-primary btn-block" onClick={() => follow({ index })}><strong>Follow</strong></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box box-primary">
                                        <div class="card-header">
                                            <h5>About me</h5>
                                        </div>

                                        <div class="box-body">
                                            <strong><i class="fa fa-book margin-r-5"></i> Education</strong>

                                            <p><small class="text font-weight-bold">{key.Education}</small></p>

                                            <hr />

                                            <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>

                                            <p> <small class="text font-weight-bold">{key.Location}</small></p>

                                            <hr />

                                            <strong><i class="fa fa-pencil margin-r-5"></i> Skills</strong>

                                            <p>
                                                <span class="badge badge-danger">{key.Skills1}</span>
                                                <span class="badge badge-success">{key.Skills2}</span>
                                                <span class="badge badge-info">{key.Skills3}</span>
                                                <span class="badge badge-warning">{key.Skills4}</span>
                                                <span class="badge badge-primary">{key.Skills5}</span>
                                            </p>

                                            <hr />

                                            <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                                            <p><small class="text font-weight-bold">{key.Notes}</small></p>
                                        </div>

                                    </div>
                                </div>
                            ))
                            }
                        </div>
                        <div className="col-md-9 ">
                            <div className="nav-tabs-custom">
                                <div className="header">
                                    <nav className="navbar navbar-expand-lg navbar-light bg">
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#navbarNavAltMarkup"
                                            aria-controls="navbarNavAltMarkup"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div
                                            className="collapse navbar-collapse mt-n2"
                                            id="navbarNavAltMarkup "
                                        >
                                            <ul className="nav nav-tabs ul">
                                                <li className="nav-item  ">
                                                    <a
                                                        className="nav-link linkactive active"
                                                        href="#"
                                                        data-toggle="tab"
                                                        aria-expanded="true"
                                                        onClick="MEDIA.activity()"
                                                    >Activity
                                                </a>
                                                </li>
                                                <li className="nav-item linkactive ">
                                                    <a className="nav-link" href="#" onClick="MEDIA.timeline()"
                                                    >Timeline</a
                                                    >
                                                </li>

                                                <li className="nav-item linkactive ">
                                                    <a
                                                        className="nav-link"
                                                        data-toggle="tab"
                                                        aria-expanded="true"
                                                        href="#settings"
                                                    >Settings</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                <div className="tab-content">
                                    <div className="" id="activity">
                                        {userProfile.map(key => key.activity.map((key, index) => (
                                            <div>
                                                <div className="alert alert-dismissible">
                                                    <button className="btn  close" data-dismiss="alert" onClick={()=>newsFeedClose(index)}>&times;</button>
                                                    <div className="user-block">
                                                        <img className="img-circle img-bordered-sm" src={key.userImg} alt="User Image" />
                                                        <span className="username">
                                                            <a href="#">{key.userName}</a>

                                                        </span>
                                                        <span className="description">{key.activityStatus}</span>
                                                    </div>

                                                    <p className="m-2 mt-n1">{key.content}</p>
                                                    <div className="row m-2">
                                                        <div className="col">
                                                            <a className="alinks" href="#"><span class="mr-3 alinks"><i class="fa fa-mail-forward mr-2" style={{ fontSize: "15px" }}></i>Share</span></a>
                                                            <a className="alinks" href="#"> <span class="alinks"><i class="material-icons mr-2" style={{ fontSize: "15px" }}>thumb_up</i>Like</span></a>
                                                            <a href="#" data-toggle="modal" data-target={`#exampleModal${index}`} className=" float-right alinks" > <i className="fa fa-comments-o mr-2" style={{ fontSize: "15px" }}></i>Comments ({key.comments})</a>
                                                            {/* <a href='#commentsMenu' data-toggle="collapse" aria-expanded="false" className=" float-right alinks dropdown-toggle" > <i className="fa fa-comments-o mr-2" style={{ fontSize: "15px" }}></i>Comments ({key.comments})</a> */}
                                                        </div>
                                                    </div>
                                                    <div class="pb-2 mx-3 d-flex">
                                                        <input type="text " className="col mr-4 form-control" id="usr" placeholder="Type a comment" onChange={handleInput} />
                                                        <button className=" col-2 btn btn-danger form-control rounded" onClick={() => updateComment(index)}>Send</button>
                                                    </div>
                                                    <hr />
                                                </div>
                                                <div id="commentsMenu">




                                                    <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    {comments.filter((a, i) => index == a.label).map(comment => {
                                                                        return (
                                                                            <div>

                                                                                <li>{comment}</li>
                                                                            </div>)
                                                                    })}
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="jumbotron">
                                                    {comments.map(comment => (
                                                        <div>
                                                        
                                                        <li>{comment.key}{comment}</li>
                                                        </div>
                                                    ))}
                                                    </div> */}
                                                    
                                                </div>
                                                
                                            </div>
                                        ))
                                        )}

                                    </div>
                                    <div className="" id="timeline"></div>
                                    <div className="" id="settings"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Media
