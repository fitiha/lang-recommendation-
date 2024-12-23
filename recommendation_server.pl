:- use_module(library(http/thread_httpd)). 
:- use_module(library(http/http_dispatch)). 
:- use_module(library(http/http_json)). 
:- use_module(library(http/http_cors)). 
 
:- set_setting(http:cors, [*]). 
 
% Define HTTP handler 
:- http_handler('/recommend_language', handle_language_request, []). 
 
% Start the HTTP server 
server(Port) :- 
    http_server(http_dispatch, [port(Port)]). 
 
% Handle CORS preflight requests 
handle_language_request(Request) :- 
    option(method(options), Request), !, 
    cors_enable, 
    format('Content-type: text/plain~n~n'). 
 
% Handle POST requests to recommend_language 
handle_language_request(Request) :- 
    cors_enable, 
    (   catch(http_read_json_dict(Request, DictIn), _, fail) 
    ->  (   _{why: Why, platform: Platform, extra: Extra} :< DictIn 
        ->  recommend_language(Why, Platform, Extra, Language), 
            reply_json_dict(_{recommended_language: Language}) 
        ;   reply_json_dict(_{error: "Invalid input format"}, [status(400)]) 
        ) 
    ;   reply_json_dict(_{error: "Failed to parse JSON"}, [status(400)]) 
    ). 
 
% Recommendation logic based on user input 
recommend_language(Why, "for_my_kids", _, "Python") :- !.
 
recommend_language(Why, "make_money", Extra, "JavaScript") :- 
    Why == "make_money", 
    Extra.end == "front_end", !.
 
recommend_language(Why, "make_money", Extra, "JavaScript") :- 
    Why == "make_money", 
    Extra.end == "back_end", 
    Extra.work_for == "startup", 
    Extra.new_tech == true, !.
 
recommend_language(Why, "make_money", Extra, "Python") :- 
    Why == "make_money", 
    Extra.end == "back_end", 
    Extra.work_for == "startup", 
    Extra.new_tech == false, 
    Extra.favorite_toy == "lego", !.
 
recommend_language(Why, "make_money", Extra, "Ruby") :- 
    Why == "make_money", 
    Extra.end == "back_end", 
    Extra.work_for == "startup", 
    Extra.new_tech == false, 
    Extra.favorite_toy == "play_doh", !.
 
recommend_language(Why, "make_money", Extra, "Objective-C") :- 
    Why == "make_money", 
    Extra.os == "ios", !.
 
recommend_language(Why, "make_money", Extra, "Java") :- 
    Why == "make_money", 
    Extra.os == "android", !.
 
recommend_language(Why, "just_for_fun", Extra, "Python") :- 
    Why == "just_for_fun", 
    Extra.learning_preference == "easy", !.
 
recommend_language(Why, "just_for_fun", Extra, "Java") :- 
    Why == "just_for_fun", 
    Extra.learning_preference == "harder", !.
 
recommend_language(Why, "just_for_fun", Extra, "C++") :- 
    Why == "just_for_fun", 
    Extra.learning_preference == "hardest", !.
 
recommend_language(_, _, _, "unknown").  % Default case 
 
% Entry point for running the server 
:- initialization(server(8080)).