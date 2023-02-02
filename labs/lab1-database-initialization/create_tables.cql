
/* 
 * We need to keep track of the count to display in UI. 
 * - We want all hotels in same partition to avoid full scan
**/

CREATE TABLE IF NOT EXISTS locations (
   location_type text,
   country text,
   city text,
   pitch text,
   hotel_count counter,
   PRIMARY KEY((location_type), country, city, pitch)
);

UPDATE locations SET hotel_count=location_count+72 
WHERE location_type='hotels' 
AND country='Italy' 
AND city='Milan'
AND pitch='capital of fashion and Opera';

UPDATE locations SET hotel_count=hotel_count+132 
WHERE location_type='hotels' 
AND country='Spain' 
AND city='Barcelona'
AND pitch='Architecture, delicious cuisine, and lively atmosphere';

UPDATE locations SET hotel_count=hotel_count+81 
WHERE location_type='hotels' 
AND country='Austria' 
AND city='Vienna'
AND pitch='Rich history and cultural heritage';

UPDATE locations SET hotel_count=hotel_count+356 
WHERE location_type='hotels' 
AND country='United Kingdom'
AND city='London'
AND pitch='Vibrant with a bustling cosmopolitan atmosphere';

UPDATE locations SET hotel_count=hotel_count+263 
WHERE location_type='hotels' 
AND country='France' 
AND city='Paris'
AND pitch='The romantic city';

UPDATE locations SET hotel_count=hotel_count+83 
WHERE location_type='hotels' 
AND country='Netherlands' 
AND city='Amsterdam'
AND pitch='Canals, museums, and liberal culture';

UPDATE locations SET hotel_count=hotel_count+0
WHERE location_type='hotels' 
AND country='U.S.A (CA)' 
AND city='SanJose'
AND pitch='Get Proficient with Cassandra';

// ----------

CREATE TABLE IF NOT EXISTS hotel_details (
   uid        uuid,
   name       text,
   country    text,
   city       text,
   price      int,
   address    text,
   thumbnail  text,
   longitude  double,
   latitude   double,
   avg_rate   double,
   PRIMARY KEY ((uid))
);

CREATE TABLE IF NOT EXISTS hotels_by_location (
   country            text,
   city               text,
   uid                uuid,
   name               text,
   price              int,
   address            text,
   thumbnail          text,
   avg_rate           double,
   review_count       int,
   days_since_review  int,
   PRIMARY KEY ((country), city, uid)
);

CREATE TABLE IF NOT EXISTS reviews_by_hotel (
   hotel_uid                   uuid,
   review_uid                  timeuuid,
   negative_review             text,
   negative_review_words       int,
   positive_review             text,
   positive_review_words       int,
   additional_scoring          int,
   reviewer_nationality        text,
   reviewer_score              double,
   reviewer_reviews_count      int,
   flag_processed              boolean,
   flag_validated              boolean,
   PRIMARY KEY ((hotel_uid), review_uid)
) WITH CLUSTERING ORDER BY (review_uid DESC);




CREATE TABLE IF NOT EXISTS staging_hotel_reviews (
  uid                                        uuid,
  hotel_address                              text,
  additional_number_of_scoring               int,
  review_date                                date,
  average_score                              double,
  hotel_name                                 text,
  reviewer_nationality                       text,
  negative_review                            text,
  review_total_negative_word_counts          int,
  total_number_of_reviews                    int,
  positive_review                            text,
  review_total_positive_word_counts          int,
  total_number_of_reviews_reviewer_has_given int,
  reviewer_score                             double,
  tags                                       set<text>,
  days_since_review                          text,
  latitude                                   double,
  longitude                                  double,
  PRIMARY KEY(uid)
);


CREATE TABLE IF NOT EXISTS users (
  email            text,
  firstname        text,
  lastname         text,
  hashed_password  text,
  PRIMARY KEY((email))
);
